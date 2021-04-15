import React from 'react';
import {connect} from "react-redux";
import {updateTransactionById} from "../../redux/transactionActions";
import TransactionForm from "./TransactionForm";

function TransactionFormWrapperEdit(props) {

    const onFinish = ({purpose, venue, memberWhoPaid, paidForMembers, amount}) => {
        const updatedTransaction = {
            _id: props.transactionInfo._id,
            purpose: purpose,
            venue:venue,
            memberWhoPaid: memberWhoPaid,
            paidForMembers: paidForMembers,
            amount: amount,
            partyId: props.partyInfo._id
        }
        const newTransaction = {...props.transactionInfo, ...updatedTransaction}
        props.transactionUpdateById(newTransaction);

    }
    return (
        <TransactionForm onFinish={onFinish}
                         onClose={props.close}
                         submitButtonText='Update'
                         initialValues={props.transactionInfo}/>
    );
}

const mapStateToProps = (state) => ({
    transactionInfo: state.transactionReducer.transactionInfo,
    partyInfo: state.partyReducer.partyInfo,
})
const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch({type: 'MODAL_CLOSE'}),
    transactionUpdateById: (transaction) => dispatch(updateTransactionById(transaction))
})
export default connect(mapStateToProps, mapDispatchToProps)(TransactionFormWrapperEdit);
