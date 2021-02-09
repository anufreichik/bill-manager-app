import axios from 'axios';
import {authHeader} from "../helpers/authHeader";

export function getMembers(partyId){
    return (dispatch) => {
        axios({
            method: 'POST',
            headers: authHeader(),
            url: `http://localhost:5000/member/search`,
            data:{partyId,limit:10, page:1}
        })
            .then(
                (res) => dispatch({type:'GET_MEMBERS', payload:res.data})
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
export function addMember(member) {
    return (dispatch) => {
        //axios.post(`http://localhost:5000/member`, member)
        axios({
            method: 'POST',
            headers: authHeader(),
            url: `http://localhost:5000/member`,
            data:member
        })

            .then(
                (res) => dispatch(getMembers(member.partyId))
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
