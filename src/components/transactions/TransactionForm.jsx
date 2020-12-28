import React, {useState} from 'react';
import {FaPlus} from "react-icons/all";
import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";

function TransactionForm(props) {
    const [showModal, setShowModal] = useState(false);
    const [transactionPurpose, setTransactionPurpose] = useState('');
    const [transactionAmount, setTransactionAmount]=useState(0);
    const [paidForMembers, setPaidForMembers]  = useState([]);
    const [whoPaid, setWhoPaid]  = useState('');

    const toggle = () => setShowModal(!showModal);

    const handleSave = () => {
        const members = paidForMembers.map(el=>el._id);
        props.addTransaction({purpose:transactionPurpose, memberpaid:whoPaid, members, amount:transactionAmount });
        setShowModal(false);
    }

    const handleOnChangePaidSelect = (e) => {
        setWhoPaid(e.target.value);
    }

    function handleCheckboxChange(member) {
            const isSelected = paidForMembers.includes(member);
            setPaidForMembers(
                isSelected
                    ? paidForMembers.filter(e => e !== member)
                    : [...paidForMembers, member]
            );
    }

    return (

        <div>
            <button type="button" className="btn btn-primary rounded-pill p-2" onClick={toggle}>
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
                            {
                                props.allMembersList.filter(el =>
                                    el.partyId === props.partyId
                                ).map(elem =>
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

                    <div className="col-auto">
                        <label htmlFor="paidfor">Paid For</label>
                        <ul>
                            {
                                props.allMembersList.filter(el =>
                                    el.partyId === props.partyId
                                ).map(member =>
                                    <li>
                                        <input className='form-check-input'
                                               key={member._id}
                                               type="checkbox"
                                               onChange={()=>handleCheckboxChange(member)}
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
    allMembersList: state.members
})
const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);