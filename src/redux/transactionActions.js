import axios from 'axios';
import {authHeader} from "../helpers/authHeader";
import {getMembers} from "./memberActions";

export function getTransactions(partyId){
    return (dispatch) => {
        axios({
            method: 'POST',
            headers: authHeader(),
            url: `http://localhost:5000/transaction/search`,
            data: {partyId}
        })
            .then(
                (res) => {
                    return   dispatch({type:'GET_TRANSACTIONS', payload:res.data})
                }
            )
            .catch(
                (err) => {
                    if (err.response.status === 401) {
                        console.log('unauthorized, logging out ...');
                        dispatch({type:'AUTH_FAIL', payload:null});
                    }

                }
            )
    }
}

export function addTransaction(transaction){
    return (dispatch) => {
        axios({
            method: 'POST',
            headers: authHeader(),
            url: `http://localhost:5000/transaction`,
            data: transaction
        })
            .then(
                (res)  =>{
                  return   dispatch(getTransactions(transaction.partyId))
                }
            )
            .catch(
                (err) => {
                    if (err.response.status === 401) {
                        console.log('unauthorized, logging out ...');
                        dispatch({type:'AUTH_FAIL', payload:null});
                    }

                }
            )
    }
}

export function transactionGetById(transactionId) {
    return (dispatch) => {
        axios({
            method: 'GET',
            headers: authHeader(),
            url: `http://localhost:5000/transaction/${transactionId}`
        })

            .then(
                (res) => {
                    return dispatch({type:'SET_TRANSACTION_INFO', payload:res.data})
                }
            )
            .catch(
                (err) => {
                    if (err.response.status === 401) {
                        console.log('unauthorized, logging out ...');
                        dispatch({type:'AUTH_FAIL', payload:null});
                    }

                }
            )
    }
}

export function updateTransactionById(transaction) {
    return (dispatch) => {
        axios({
            method: 'PATCH',
            headers: authHeader(),
            url: `http://localhost:5000/transaction/${transaction._id}`,
            data:transaction
        })

            .then(
                (res) => dispatch(getTransactions(transaction.partyId))
            )
            .catch(
                (err) => {
                    if (err.response.status === 401) {
                        console.log('unauthorized, logging out ...');
                        dispatch({type:'AUTH_FAIL', payload:null});
                    }

                }
            )
    }
}
