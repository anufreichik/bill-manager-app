import axios from 'axios';
//import {history} from "../helpers/history";

export function userLogin(user, history){
    return (dispatch) => {
        axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: `http://localhost:5000/user/login`,
            data:user
        })
            .then(
                (res) => {
                    // login successful if there's a jwt token in the response
                    if (res.data.user) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('user', JSON.stringify(res.data.user));
                        dispatch({type:'SET_USER', payload:res.data});
                        history.push('/');
                    }

                }
            )
            .catch(
                (err) => {
                    console.log(err, 'error');
                    history.push('/login');
                }

            )
    }
}
export function userCreate(user) {
    console.log('action add party axios')
    return (dispatch) => {
        axios({
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            url:`http://localhost:5000/user`,
            data: user
        })
            .then(
                //(res) => dispatch(setUser())
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}