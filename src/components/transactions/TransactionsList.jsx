import React, {useEffect} from 'react';
import {connect} from "react-redux";
import TransactionForm from "./TransactionForm";
import {addTransaction, getTransactions} from "../../redux/transactionActions";


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

    return (
        <div>
            <h6 className='text-muted mt-3'>Transactions</h6>
            <ul className="list-group borderless d-flex border-0">
                <li className="list-group-item disabled border-0" key={'transaction_header'}>
                    <div className="row">
                        <div className='col-3'>Name</div>
                        <div  className='col-3'>Amount</div>
                        <div  className='col-3'>Who Paid</div>
                        <div  className='col-3'>Paid For</div>
                    </div>
                </li>
                {props.transactionsList.length ? props.transactionsList.map(el =>
                    <li key={el._id} className="list-group-item border-top-1 border-left-0 border-right-0">
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
                                            <span key={m._id} className="mr-2 badge badge-pill bg-primary text-white">{m.memberName[0].toUpperCase()}</span>
                                        )
                                }
                            </div>
                        </div>
                    </li>
                )
                    :(<div className='row m-auto mt-1'>No Transactions found</div>)
                }
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
