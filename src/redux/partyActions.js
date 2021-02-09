import axios from 'axios';
import {authHeader} from "../helpers/authHeader";

export function getParties(){
    return (dispatch) => {
        axios({
            method: 'GET',
            headers: authHeader(),
            url: `http://localhost:5000/party`,
        })
            .then(
                (res) => {
                    dispatch({type: 'GET_PARTIES', payload: res.data})

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
export function addParty(party) {
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
                (err) => {
                    if (err.response.status === 401) {
                        console.log('unauthorized, logging out ...');
                        dispatch({type:'AUTH_FAIL', payload:null});
                    }

                }
            )
    }
}
