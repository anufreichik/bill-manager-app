import axios from 'axios';

export function getMembers(){
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `http://localhost:5000/member`
        })
            .then(
                (res) => dispatch({type:'GET_MEMBERS', payload:res.data})
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}
export function addMember(member) {
    return (dispatch) => {
        axios.post(`http://localhost:5000/member`, member)
            .then(
                (res) => dispatch(getMembers())
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}