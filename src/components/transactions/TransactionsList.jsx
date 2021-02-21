import React, {useEffect} from 'react';
import {connect} from "react-redux";
import { getTransactions, transactionGetById} from "../../redux/transactionActions";
import {Button, IconButton} from "@material-ui/core";
import {DeleteOutline, EditOutlined, Payment} from "@material-ui/icons";


function TransactionsList(props) {

    function handleEditOnClick(id) {
        props.transactionGetById(id);

        props.open({
            title: 'Edit Transaction',
            component: 'EditTransaction',
            width: '200',
        });
    }

    function handleAddOnClick(){

        props.open({
            title: 'Add Transaction',
            component: 'AddTransaction',
            width: '200',
        });
    }


    useEffect(()=>{
        props.getTransactions(props.partyId);
    },[])

    return (
        <div>
            <div className="mt-3 mb-2 text-right">
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Payment />}
                    onClick={handleAddOnClick}>
                    Add Transaction
                </Button>

            </div>
            <ul className="list-group borderless d-flex ">
                <li  className="list-group-item disabled" key={'transaction_header'}>
                    <div className="row">
                        <div className='col-2'>Name</div>
                        <div  className='col-2'>Amount</div>
                        <div  className='col-3'>Who Paid</div>
                        <div  className='col-3'>Paid For</div>
                        <div  className='col-2'></div>
                    </div>
                </li>
                {props.transactionsList.length ? props.transactionsList.map(el =>
                    <li key={el._id} className="list-group-item ">
                        <div className="row">
                            <div className="col-2">{el.purpose}</div>
                            <div className="col-2">${el.amount}</div>
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
                )
                    :(<div className='row m-auto mt-1'>No Transactions found</div>)
                }
            </ul>

        </div>
    );
}

const mapStateToProps = (state) => ({
    transactionsList: state.transactionReducer.transactions,
    membersList: state.memberReducer.members
})
const mapDispatchToProps = (dispatch) => ({
    getTransactions:(partyId) => dispatch(getTransactions(partyId)),
    open: (payload) => dispatch({type: 'MODAL_OPEN', payload}),
    transactionGetById: (transactionId) => dispatch(transactionGetById(transactionId)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
