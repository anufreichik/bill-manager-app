import React from 'react';
import {connect} from "react-redux";
import {addTransaction} from "../../redux/transactionActions";
import TransactionForm from "./TransactionForm";


function TransactionFormWrapperAdd(props) {


    const onFinish = ({purpose, venue,  memberWhoPaid, paidForMembers, amount}) => {
        const newTransaction = {
            purpose: purpose,
            venue:venue,
            memberWhoPaid: memberWhoPaid,
            paidForMembers: paidForMembers,
            amount: amount,
            partyId: props.partyInfo._id
        }


        props.addTransaction(newTransaction);
    }
    return (
        <TransactionForm onFinish={onFinish}
                         onClose={props.close}
                         submitButtonText='Create'/>

    );
}

const mapStateToProps = (state) => ({
    partyInfo: state.partyReducer.partyInfo,
})
const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch({type: 'MODAL_CLOSE'}),
    addTransaction: (newTransaction) => dispatch(addTransaction(newTransaction)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TransactionFormWrapperAdd);
