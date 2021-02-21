import React from 'react';
import {connect} from "react-redux";
import ExpenseItemForm from "./ExpenseItemForm";
import {updateExpenseById} from "../../redux/expenseActions";

function ExpenseFormWrapperEdit(props) {

    const onFinish = ({expenseName, expenseAmount, tax, tip}) => {
        const total = +((expenseAmount + expenseAmount*tax/100 + expenseAmount*tip/100).toFixed(2));
        const expense = {
            expenseName: expenseName,
            expenseAmount: expenseAmount,
            expenseTaxPercent: tax,
            expenseTipPercent: tip,
            expenseTotal:total,
        }
        const updatedExpense = {...props.expenseInfo, ...expense}

        props.expenseUpdateById(updatedExpense);
    };
    return (

        <ExpenseItemForm onFinish={onFinish}
                    submitButtonText='Update'
                    onClose={props.close}
                    initialValues={props.expenseInfo}/>

    );
}

const mapStateToProps = (state) => ({
    expenseInfo: state.expenseReducer.expenseInfo,
    partyInfo: state.partyReducer.partyInfo,
})
const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch({type:'MODAL_CLOSE'}),
    expenseUpdateById:(expense)=> dispatch(updateExpenseById(expense)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseFormWrapperEdit);
