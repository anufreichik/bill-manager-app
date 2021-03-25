import axios from 'axios';
import {authHeader} from "../helpers/authHeader";

export function getDebts(partyId){
    const {  NODE_ENV } = process.env;

    const API_URL = NODE_ENV === 'production' ? window.API_URL : process.env.REACT_APP_API_URL;
    return (dispatch) => {
        axios({
            method: 'POST',
            headers: authHeader(),
            url: `${process.env.REACT_APP_API_URL}/debt/search`,
            data:{partyId,limit:10, page:1}
        })
            .then(
                (res) => dispatch({type:'GET_DEBTS', payload:res.data})
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
