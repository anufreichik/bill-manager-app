import React, {useEffect, useState} from 'react';
import {FaPlus} from "react-icons/all";
import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {getExpenses} from "../../redux/actionsExpense";

function TransactionForm(props) {
    const [showModal, setShowModal] = useState(false);
    const [transactionPurpose, setTransactionPurpose] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [paidForMembers, setPaidForMembers] = useState([]);
    const [whoPaid, setWhoPaid] = useState('');

    const partyMembers = props.membersList;
    const partyExpenses = props.expensesList;

    const toggle = () => setShowModal(!showModal);

    const handleSave = () => {
        const members = paidForMembers.map(el => el._id);
        props.addTransaction({partyId:props.partyId, purpose: transactionPurpose, memberWhoPaid: whoPaid, members, amount: transactionAmount});
        setShowModal(false);
    }

    const handleOnChangePaidSelect = (e) => {
        setWhoPaid(e.target.value);
    }

    const handleCheckboxChange = (member) => {
        const isSelected = paidForMembers.includes(member);
        setPaidForMembers(
            isSelected
                ? paidForMembers.filter(e => e !== member)
                : [...paidForMembers, member]
        );
    }
    const handleOnChangeExpenseItems = (e) => {
        let amount=0
        if(e.target.value)
            amount = transactionAmount + ( props.expensesList.filter(el => el._id === e.target.value)[0].expenseTotal || 0);
        else
            amount = transactionAmount;
        setTransactionAmount(amount);
    }

    useEffect(
        () => {
            props.getExpenses(props.partyId);
        }, []
    )

    return (

        <div>
            <button type="button" className="btn btn-outline-primary rounded-pill p-2" onClick={toggle}>
                <FaPlus/><span className="p-2">New Transaction</span>
            </button>
            <Modal show={showModal} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Transaction</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="col-auto">
                        <label htmlFor="purpose">Purpose</label>
                        <input type="text" className="form-control" id="purpose" placeholder="Transaction Purpose"
                               onChange={(e) => setTransactionPurpose(e.target.value)}/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="paid">Who Paid</label>
                        <select className='form-control'
                                id="paid" onChange={handleOnChangePaidSelect}>
                            <option value=''>Select Member Who Paid</option>
                            {
                                partyMembers.map(elem =>
                                    <option key={elem._id} value={elem._id}>{elem.memberName}</option>
                                )

                            }

                        </select>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="amount">Amount</label>
                        <input type="text" className="form-control" id="amount" placeholder="Transaction Amount"
                               onChange={(e) => setTransactionAmount(+e.target.value)}/>
                    </div>
                    {partyExpenses.length > 0 &&
                    <>
                        <div className="col-auto">
                            OR
                        </div>
                        <div className="col-auto">
                            {/*<label htmlFor="expenseItems">Select Expense Item</label>*/}
                            <select className='form-control'
                                    id="expenseItems" onChange={handleOnChangeExpenseItems}>
                                <option value=''>Select Expense Item</option>
                                {
                                    partyExpenses.map(elem =>
                                        <option key={elem._id}
                                                value={elem._id}>{`${elem.expenseName} ($${elem.expenseTotal})`}</option>
                                    )
                                }

                            </select>
                        </div>
                    </>
                    }
                    <div className="col-auto">
                        <label htmlFor="paidfor">Paid For</label>
                        <ul>
                            {
                                partyMembers.map(member =>
                                    <li key={member._id}>
                                        <input className='form-check-input'
                                               key={member._id}
                                               type="checkbox"
                                               onChange={() => handleCheckboxChange(member)}
                                               checked={paidForMembers.includes(member)}/>
                                        {member.memberName}
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={toggle}>Cancel</Button>
                    <Button variant="primary" onClick={handleSave}>Save</Button>
                </Modal.Footer>

            </Modal>
        </div>
    )

}

const mapStateToProps = (state) => ({
    membersList: state.memberReducer.members,
    expensesList: state.expenseReducer.expenses
})
const mapDispatchToProps = (dispatch) => ({
    getExpenses:(partyId) => dispatch(getExpenses(partyId)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);