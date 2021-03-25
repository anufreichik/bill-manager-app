import axios from 'axios';
import {authHeader} from "../helpers/authHeader";

export function getParties(){
    return (dispatch) => {
        axios({
            method: 'GET',
            headers: authHeader(),
            url: `${process.env.REACT_APP_API_URL}/party`,
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
            url:`${process.env.REACT_APP_API_URL}/party`,
            data: party
        })
        //axios.post(`${process.env.REACT_APP_API_URL}/party`, party)
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


export function partyGetById(partyId) {
    return (dispatch) => {
        axios({
            method: 'GET',
            headers: authHeader(),
            url: `${process.env.REACT_APP_API_URL}/party/${partyId}`
        })

            .then(
                (res) => {
                    return dispatch({type:'SET_PARTY_INFO', payload:res.data})
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


export function updatePartyById(party) {
    return (dispatch) => {
        axios({
            method: 'PATCH',
            headers: authHeader(),
            url: `${process.env.REACT_APP_API_URL}/party/${party._id}`,
            data:party
        })

            .then(
                (res) => dispatch(getParties(party.partyId))
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

