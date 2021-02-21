const initialMembers = {
    members: [],
    memberInfo:{}
}

const memberReducer = (state=initialMembers, action) => {
    switch (action.type) {
        case 'GET_MEMBERS':
            return {
                ...state,
                members:action.payload
            }
        case 'ADD_MEMBER':
            return {
                ...state,
                members: [...state.members, action.payload]
            }

        case 'SET_MEMBER_INFO':
            return {
                ...state,
                memberInfo:{...action.payload}
            }
        default:
            return state;
    }
}
export default memberReducer;
