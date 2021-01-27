import React, {useEffect} from 'react';
import {connect} from "react-redux";
import TransactionForm from "./TransactionForm";
import {addTransaction, getTransactions} from "../../redux/actionsTransaction";


function TransactionsList(props) {

    const addTransaction = ({purpose, memberWhoPaid, members, amount}) => {

        const newTransaction = {
            purpose: purpose,
            memberWhoPaid: memberWhoPaid,
            paidForMembers: members,
            amount: amount,
            partyId: props.partyId
        }
        props.addTransaction(newTransaction);
    }

    useEffect(()=>{
        props.getTransactions(props.partyId);
    },[])

    console.log(props.transactionsList)
    return (
        <div>
            <h6 className='text-muted mt-3'>Transactions</h6>
            <ul className="list-group d-flex">
                {props.transactionsList && props.transactionsList.map(el =>
                    <li key={el._id} className="list-group-item">
                        <div className="row">
                            <div className="col-3">{el.purpose}</div>
                            <div className="col-3">${el.amount}</div>
                            <div
                                className="col-3">
                                {el.memberWhoPaid.memberName}
                                </div>
                            <div className="col-3">
                                {
                                    el.paidForMembers
                                        .map(m =>
                                            <span className="mr-2 badge badge-pill bg-secondary text-white">{m.memberName[0].toUpperCase()}</span>
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
    transactionsList: state.transactionReducer.transactions,
    membersList: state.memberReducer.members
})
const mapDispatchToProps = (dispatch) => ({
    getTransactions:(partyId) => dispatch(getTransactions(partyId)),
    addTransaction:(newTransaction) => dispatch(addTransaction(newTransaction)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);