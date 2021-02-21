import React, {useEffect} from 'react';

import {connect} from "react-redux";
import {getExpenses, expenseGetById} from "../../redux/expenseActions";
import {Button, IconButton} from "@material-ui/core";
import {DeleteOutline, EditOutlined, MonetizationOn} from "@material-ui/icons";

function ExpenseItemsList(props) {

    function handleEditOnClick(id) {
        console.log(id)
        props.expenseGetById(id);
        props.open({
            title: 'Edit Expense',
            component: 'EditExpense',
            width: '200',
        });
    }

    function handleAddOnClick(){
        props.open({
            title: 'Add Expense',
            component: 'AddExpense',
            width: '200',
        });
    }

    useEffect(
        () => {
            props.getExpenses(props.partyId);
        }, []
    )
    return (
        <div>
            <div className="mt-3 mb-2 text-right">
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<MonetizationOn />}
                    onClick={handleAddOnClick}>
                    Add Expense
                </Button>
            </div>
            <ul className="list-group d-flex">
                {props.expensesList && props.expensesList.map(el =>
                    <li key={el._id} className="list-group-item">
                        <div className="row">
                            <div className="col-2">{el.expenseName}</div>
                            <div className="col-2">${el.expenseAmount}</div>
                            <div className="col-2">{el.expenseTaxPercent} %</div>
                            <div className="col-2">{el.expenseTipPercent} %</div>
                            <div className="col-2">${el.expenseTotal}</div>

                            <div className="col-2 d-flex justify-content-end">
                                <IconButton aria-label="edit" onClick={() => handleEditOnClick(el._id)}>
                                    <EditOutlined color="action" fontSize="small"/>
                                </IconButton>

                                <IconButton aria-label="edit">
                                    <DeleteOutline color="secondary" fontSize="small"/>
                                </IconButton>
                            </div>


                        </div>
                    </li>
                )}
            </ul>


        </div>
    );
}

const mapStateToProps = (state) => ({
    expensesList: state.expenseReducer.expenses
})
const mapDispatchToProps = (dispatch) => ({
    getExpenses:(partyId) => dispatch(getExpenses(partyId)),
    expenseGetById: (expenseId) => dispatch(expenseGetById(expenseId)),
    open: (payload) => dispatch({type: 'MODAL_OPEN', payload}),
})
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItemsList);
