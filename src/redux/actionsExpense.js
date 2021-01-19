import axios from 'axios';

export function getExpenses(){
    console.log('action get party axios')
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `http://localhost:5000/expense`
        })
            .then(
                (res) => dispatch({type:'GET_PARTIES', payload:res.data})
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}
export function addExpense(expense) {
    console.log('action add party axios')
    return (dispatch) => {
        // axios({
        //     method:'POST',
        //     url:`http://localhost:5000/party`,
        //     data: party
        // })
        axios.post(`http://localhost:5000/expense`, expense)
            .then(
                (res) => dispatch(getExpenses())
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}