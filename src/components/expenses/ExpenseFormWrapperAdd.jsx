import React from 'react';
import {connect} from "react-redux";
import {addExpense} from "../../redux/expenseActions";
import ExpenseItemForm from "./ExpenseItemForm";

function ExpenseFormWrapperAdd(props) {

    const onFinish = ({expenseName, expenseAmount, tax, tip}) => {
        const total = +((expenseAmount + expenseAmount*tax/100 + expenseAmount*tip/100).toFixed(2));
        const newExpense = {
            expenseName: expenseName,
            expenseAmount: expenseAmount,
            expenseTaxPercent: tax,
            expenseTipPercent: tip,
            expenseTotal:total,
            partyId: props.partyInfo._id
        }
        props.addExpense(newExpense);

    }
    return (
        <ExpenseItemForm onFinish={onFinish}
                    onClose={props.close}
                    submitButtonText='Create'/>
    );
}

const mapStateToProps = (state) => ({
    partyInfo: state.partyReducer.partyInfo,
})
const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch({type:'MODAL_CLOSE'}),
    addExpense:(newExpense)=> dispatch(addExpense(newExpense)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseFormWrapperAdd);
