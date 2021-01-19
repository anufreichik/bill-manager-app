import axios from 'axios';
import {authHeader} from "../helpers/authHeader";

export function getParties(){
    console.log('action get party axios')
    return (dispatch) => {
        axios({
            method: 'GET',
            headers: authHeader(),
            url: `http://localhost:5000/party`,
        })
            .then(
                (res) => dispatch({type:'GET_PARTIES', payload:res.data})
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}
export function addParty(party) {
    console.log('action add party axios')
    return (dispatch) => {
        axios({
            method:'POST',
            headers: authHeader(),
            url:`http://localhost:5000/party`,
            data: party
        })
        //axios.post(`http://localhost:5000/party`, party)
            .then(
                (res) => dispatch(getParties())
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}