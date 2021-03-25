import axios from 'axios';
import {authHeader} from "../helpers/authHeader";

export function getTransactions(partyId){
    return (dispatch) => {
        axios({
            method: 'POST',
            headers: authHeader(),
            url: `${process.env.REACT_APP_API_URL}/transaction/search`,
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
            url: `${process.env.REACT_APP_API_URL}/transaction`,
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
            url: `${process.env.REACT_APP_API_URL}/transaction/${transactionId}`
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
            url: `${process.env.REACT_APP_API_URL}/transaction/${transaction._id}`,
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
