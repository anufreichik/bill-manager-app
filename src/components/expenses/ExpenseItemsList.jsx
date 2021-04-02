import React, {useEffect} from 'react';

import {connect} from "react-redux";
import {getExpenses, expenseGetById} from "../../redux/expenseActions";
import {Button, IconButton} from "@material-ui/core";
import {DeleteOutline, EditOutlined, MonetizationOn} from "@material-ui/icons";
import MaterialTable from "material-table";

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
            <div className="mt-3 mb-2 text-center">
                <Button
                    disableElevation
                    variant="contained"
                    color="secondary"
                    startIcon={<MonetizationOn />}
                    onClick={handleAddOnClick}>
                    Add Expense
                </Button>
            </div>

            <MaterialTable
                title="Expense Items"
                columns={[
                    { title: 'Expense', field: 'expenseName' },
                    { title: 'Amount', field: 'expenseAmount' , render: rowData => <>${rowData.expenseAmount}</>},
                    { title: 'Tax', field: 'expenseTaxPercent' , render: rowData => <>{rowData.expenseTaxPercent}%</>},
                    { title: 'Tip', field: 'expenseTipPercent' , render: rowData => <>{rowData.expenseTipPercent}%</>},
                    { title: 'Total', field: 'expenseTotal' , render: rowData => <>${rowData.expenseTipPercent}</>},

                    {
                        field: '_id',
                        title: '',
                        filtering: false,
                        sorting: false,
                        cellStyle: {
                            textAlign: "right"
                        },
                        render: rowData => {
                            return (<>
                                <IconButton aria-label="edit" onClick={() => handleEditOnClick(rowData._id)}>
                                    <EditOutlined color="action" fontSize="small"/>
                                </IconButton>

                                <IconButton aria-label="edit">
                                    <DeleteOutline color="secondary" fontSize="small"/>
                                </IconButton>
                            </>)
                        }
                    }
                ]}
                data={props.expensesList}
                options={{
                    //filtering: true,
                    sorting: true,
                    search:true
                }}
            />


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
