import axios from 'axios';

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
                        dispatch({type:'LOGIN_SUCCESS', payload:res.data});
                        history.push('/dashboard');
                    }

                }
            )
            .catch(
                (err) => {
                    console.log(err, 'error');
                    dispatch({type:'AUTH_FAIL', payload:null});
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
