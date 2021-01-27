import axios from 'axios';
import {authHeader} from "../helpers/authHeader";

export function getTransactions(partyId){
    return (dispatch) => {
        axios({
            method: 'POST',
            headers: authHeader(),
            url: `http://localhost:5000/transaction/search`,
            data: {partyId}
        })
            .then(
                (res) => dispatch({type:'GET_TRANSACTIONS', payload:res.data})
            )
            .catch(
                (err) => console.log(err, 'error')
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
                (res) =>(res) => dispatch(getTransactions(transaction.partyId))
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}