import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getTransactions, transactionGetById} from "../../redux/transactionActions";
import {Button, IconButton} from "@material-ui/core";
import {DeleteOutline, EditOutlined, Payment} from "@material-ui/icons";
import MaterialTable from "material-table";


function TransactionsList(props) {

    function handleEditOnClick(id) {
        props.transactionGetById(id);

        props.open({
            title: 'Edit Transaction',
            component: 'EditTransaction',
            width: '200',
        });
    }

    function handleAddOnClick() {

        props.open({
            title: 'Add Transaction',
            component: 'AddTransaction',
            width: '200',
        });
    }


    useEffect(() => {
        props.getTransactions(props.partyId);
    }, [])

    return (
        <div>
            <div className="mt-3 mb-2 text-center">
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Payment/>}
                    onClick={handleAddOnClick}>
                    Add Transaction
                </Button>

            </div>

            <MaterialTable
                title="Transactions"

                columns={[
                    {title: 'Name', field: 'purpose'},
                    {title: 'Amount', field: 'amount', render: rowData => <>${rowData.amount}</>},
                    {title: 'Who Paid', field: 'memberWhoPaid.memberName'},
                    {
                        title: 'Paid For', field: 'paidForMembers', render: rowData =>
                            (<>
                                {
                                    rowData.paidForMembers
                                        .map
                                        (m =>
                                            <span key={m._id}
                                                  className="mr-2 badge badge-pill bg-primary text-white">{m.memberName.slice(0,5).toUpperCase()}</span>
                                        )
                                }
                            </>)
                    },
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
                data={props.transactionsList}
                options={{
                    //filtering: true,
                    sorting: true,
                    search: true
                }}
            />


        </div>
    );
}

const mapStateToProps = (state) => ({
    transactionsList: state.transactionReducer.transactions,
    membersList: state.memberReducer.members
})
const mapDispatchToProps = (dispatch) => ({
    getTransactions: (partyId) => dispatch(getTransactions(partyId)),
    open: (payload) => dispatch({type: 'MODAL_OPEN', payload}),
    transactionGetById: (transactionId) => dispatch(transactionGetById(transactionId)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
