const initialState = {
    user: {},
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':

            let loggedUser = {email:action.payload.user.email, userId:action.payload.user.userId, loggedIn:true}
            return {
                ...state,
                user:loggedUser
            }


        default:
            return state;
    }
}
export default userReducer;