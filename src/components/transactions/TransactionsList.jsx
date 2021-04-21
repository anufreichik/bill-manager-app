import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {deleteTransactionById, getTransactions, transactionGetById} from "../../redux/transactionActions";
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

    function handleDeleteOnClick(id){
        props.open({
            title: 'Delete Transaction',
            component: 'DeleteTransaction',
            width: '200',
            data:{_id:id, partyId:props.partyId}
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
                <Button disableElevation
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
                    {title: 'Venue', field: 'venue'},
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
                                    <DeleteOutline color="secondary" fontSize="small" onClick={()=>handleDeleteOnClick(rowData._id)}/>
                                </IconButton>
                            </>)
                        }
                    }
                ]}
                data={props.transactionsList}
                options={{
                    //filtering: true,
                    paging:true,
                    emptyRowsWhenPaging: false,   //to make page size fix in case of less data rows
                    pageSizeOptions:[10,20,40],    // rows selection options
                    pageSize:10,
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
