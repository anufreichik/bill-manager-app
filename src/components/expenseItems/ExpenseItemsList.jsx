import React from 'react';
import ExpenseItemForm from "./ExpenseItemForm";
import {connect} from "react-redux";
import {v4 as uuidv4} from "uuid";

function ExpenseItemsList(props) {
    const addExpense = ({expenseName, expenseAmount, tax, tip}) => {
        const total = +((expenseAmount + expenseAmount*tax/100 + expenseAmount*tip/100).toFixed(2));
        const newExpense = {
            _id: uuidv4(),
            expenseName: expenseName,
            expenseAmount: expenseAmount,
            expenseTaxPercent: tax,
            expenseTipPercent: tip,
            expenseTotal:total,
            partyId: props.partyId
        }
        props.addExpense(newExpense);
    }

    return (
        <div>
            <h6 className='text-muted mt-3'>Expense Items</h6>
            <ul className="list-group d-flex">
                {props.expensesList && props.expensesList.filter(elem=>elem.partyId===props.partyId).map(el =>
                    <li key={el._id} className="list-group-item">
                        <div className="row">
                            <div className="col-3">{el.expenseName}</div>
                            <div className="col-2">${el.expenseAmount}</div>
                            <div className="col-2">{el.expenseTaxPercent} %</div>
                            <div className="col-2">{el.expenseTipPercent} %</div>
                            <div className="col-3">${el.expenseTotal}</div>

                        </div>
                    </li>
                )}
            </ul>
            <div className="mt-3 text-center">
                <ExpenseItemForm  partyId={props.partyId} addExpense={addExpense}/>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => ({
    expensesList: state.expenseReducer.expenses
})
const mapDispatchToProps = (dispatch) => ({
    addExpense:(newExpense)=>dispatch({type:'ADD_EXPENSE', payload: newExpense})
})
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItemsList);