import React from 'react';
import {connect} from "react-redux";
import TransactionForm from "./TransactionForm";
import {v4 as uuidv4} from "uuid";

function TransactionsList(props) {

    const addTransaction = ({purpose, memberpaid, members, amount}) => {
        const newTransaction = {
            _id: uuidv4(),
            purpose: purpose,
            memberWhoPaid: memberpaid,
            paidForMembers: members,
            amount: amount,
            partyId: props.partyId
        }
        props.addTransaction(newTransaction);
    }

    return (
        <div>
            <h5>Transactions</h5>
            <ul className="list-group d-flex">
                {props.transactionsList && props.transactionsList.filter(partyTran => partyTran.partyId === props.partyId).map(el =>
                    <li key={el._id} className="list-group-item">
                        <div className="row">
                            <div className="col-3">{el.purpose}</div>
                            <div
                                className="col-3">{props.allMembersList.find(paidMember => paidMember._id === el.memberWhoPaid).memberName}</div>
                            <div className="col-4 offset-2">
                                {
                                    props.allMembersList
                                        .filter(elem => elem.partyId === props.partyId && el.paidForMembers.includes(elem._id))
                                        .map(m =>
                                            <span className="mr-2 badge badge-pill badge-primary">{m.memberName[0].toUpperCase()}</span>
                                        )
                                }
                            </div>
                        </div>
                    </li>
                )}
            </ul>

            <div className="mt-3 text-center">
                <TransactionForm addTransaction={addTransaction} partyId={props.partyId}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    transactionsList: state.transactions,
    allMembersList: state.members
})
const mapDispatchToProps = (dispatch) => ({
    addTransaction: (newTransaction) => dispatch({type: 'ADD_TRANSACTION', payload: newTransaction})
})
export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);