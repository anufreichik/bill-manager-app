const initialState = {
    parties:[],
    partyInfo:{}
}

const partyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PARTIES':
            return {
                ...state,
                parties:action.payload
            }
        case 'SET_PARTY_INFO':
            return {
                ...state,
                partyInfo:{...action.payload}
            }
        case 'PARTY_CLEAR':
            return{
                ...state,
                partyInfo:{},
                transactions:[],
                transactionInfo:{},
                members: [],
                memberInfo:{},
                expenses:[],
                expenseInfo:{},
                debts:[],
                debtsSum:[],
            }
        // case 'ADD_PARTY':
        //     return {
        //         ...state,
        //         parties: [
        //             ...state.parties,
        //             action.payload
        //         ]
        //     }
        // case 'DELETE_PARTY':
        //     return {
        //         ...state,
        //         cards: state.parties.filter(el => el._id !== action.payload)
        //     }

        default:
            return state;
    }
}
export default partyReducer;
