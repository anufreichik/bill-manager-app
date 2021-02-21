import axios from 'axios';
import {authHeader} from "../helpers/authHeader";

export function getExpenses(partyId){

    return (dispatch) => {
        axios({
            method: 'POST',
            headers: authHeader(),
            url: `http://localhost:5000/expense/search`,
            data: {partyId,limit:10, page:1}
        })
            .then(
                (res) => dispatch({type:'GET_EXPENSES', payload:res.data})
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
export function addExpense(expense) {

    return (dispatch) => {
        axios({
            method: 'POST',
            headers: authHeader(),
            url: `http://localhost:5000/expense`,
            data: expense
        })
        //axios.post(`http://localhost:5000/expense`, expense)
            .then(
                (res) => dispatch(getExpenses(expense.partyId))
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

export function expenseGetById(expenseId) {
    return (dispatch) => {
        axios({
            method: 'GET',
            headers: authHeader(),
            url: `http://localhost:5000/expense/${expenseId}`
        })

            .then(
                (res) => {
                    return dispatch({type:'SET_EXPENSE_INFO', payload:res.data})
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


export function updateExpenseById(expense) {
    return (dispatch) => {
        axios({
            method: 'PATCH',
            headers: authHeader(),
            url: `http://localhost:5000/expense/${expense._id}`,
            data:expense
        })

            .then(
                (res) => dispatch(getExpenses(expense.partyId))
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
