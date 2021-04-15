import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {getExpenses} from "../../redux/expenseActions";
import {get} from "lodash";

function TransactionForm(props) {
    const [transactionPurpose, setTransactionPurpose] = useState('');
    const [transactionVenue, setTransactionVenue] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [paidForMembers, setPaidForMembers] = useState([]);
    const [whoPaid, setWhoPaid] = useState('');

    const partyMembers = props.membersList;
    const partyExpenses = props.expensesList;


    const handleSave = () => {
        props.onFinish({
            purpose: transactionPurpose,
            venue:transactionVenue,
            memberWhoPaid: whoPaid,
            paidForMembers: paidForMembers,
            amount: transactionAmount,
        });

        props.onClose();

    }
    const handleCancel = () => {
        props.onClose();
    }
    const handleOnChangePaidSelect = (e) => {
        setWhoPaid(e.target.value);
    }

    const handleCheckboxChange = (member) => {
        const isSelected = paidForMembers.includes(member._id);
        const updatedListPaidForMembers = isSelected ? paidForMembers.filter(el => el !== member._id) : [...paidForMembers, member._id];
        setPaidForMembers(updatedListPaidForMembers);

    }
    const handleOnChangeExpenseItems = (e) => {
        let amount = 0
        if (e.target.value)
            amount = transactionAmount + (props.expensesList.filter(el => el._id === e.target.value)[0].expenseTotal || 0);
        else
            amount = transactionAmount;
        setTransactionAmount(amount);
    }

    const handleTransactionAmountChange=(e)=>{
        let amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,4})?$/)) {
           setTransactionAmount(amount);
        }
    }

    useEffect(
        () => {
            props.getExpenses(props.partyInfo._id);
        }, []
    )

    useEffect(() => {
        if (props.initialValues) {
            const purpose = get(props, 'initialValues.purpose', '');
            const venue = get(props, 'initialValues.venue', '');
            const amount = get(props, 'initialValues.amount', 0);
            const memberWhoPaid = get(props, 'initialValues.memberWhoPaid._id', '');
            const paidForMembersList = get(props, 'initialValues.paidForMembers', []);

            setTransactionPurpose(purpose);
            setTransactionAmount(amount);
            setWhoPaid(memberWhoPaid);
            setPaidForMembers(paidForMembersList);
            setTransactionVenue(venue);
        }

    }, [props.initialValues])

    return (

        <div>

            <div className="col-auto">
                <label htmlFor="purpose">Purpose</label>
                <input type="text" className="form-control" id="purpose" placeholder="Transaction Purpose"
                       value={transactionPurpose}
                       onChange={(e) => setTransactionPurpose(e.target.value)}/>
            </div>

            <div className="col-auto">
                <label htmlFor="venue">Venue</label>
                <input type="text" className="form-control" id="venue" placeholder="Transaction Venue"
                       value={transactionVenue}
                       onChange={(e) => setTransactionVenue(e.target.value)}/>
            </div>


            <div className="col-auto">
                <label htmlFor="paid">Who Paid</label>
                <select className='form-control' value={whoPaid}
                        id="paid" onChange={handleOnChangePaidSelect}>
                    <option value={''}>Select Member Who Paid</option>
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
                       value={transactionAmount}
                       onChange={handleTransactionAmountChange}/>



            </div>
            {partyExpenses.length > 0 &&
            <>
                <div className="col-auto">
                    OR
                </div>
                <div className="col-auto">
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

            {/*PAID FOR MEMBERS LIST*/}
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
                                       checked={paidForMembers.includes(member._id)}/>
                                {member.memberName}
                            </li>
                        )
                    }
                </ul>
            </div>

            <div className="col-auto mt-2 float-right">
                <Button variant="primary" className="mr-2"  onClick={handleSave}>{props.submitButtonText}</Button>
                <Button variant="secondary" onClick={handleCancel}>Cancel</Button>

            </div>


        </div>
    )

}

const mapStateToProps = (state) => ({
    membersList: state.memberReducer.members,
    expensesList: state.expenseReducer.expenses,
    partyInfo: state.partyReducer.partyInfo,
})
const mapDispatchToProps = (dispatch) => ({
    getExpenses: (partyId) => dispatch(getExpenses(partyId)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
