import axios from 'axios';
import {authHeader} from "../helpers/authHeader";

export function getExpenses(partyId){
    return (dispatch) => {
        axios({
            method: 'GET',
            headers: authHeader(),
            url: `http://localhost:5000/expense`,
            data: {partyId}
        })
            .then(
                (res) => dispatch({type:'GET_EXPENSES', payload:res.data})
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}
export function addExpense(expense) {
    console.log('action add party axios')
    return (dispatch) => {
        axios({
            method: 'POST',
            headers: authHeader(),
            url: `http://localhost:5000/expense`,
            data: expense
        })
        //axios.post(`http://localhost:5000/expense`, expense)
            .then(
                (res) => dispatch(getExpenses())
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}