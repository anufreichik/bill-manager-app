import {v4 as uuidv4} from "uuid";

const initialState = {
    parties: [{
        _id: uuidv4(),
        partyName: 'Christmas Party',
        partyDate: '12/14/20',
        description: 'party at Valya place'
    },
        {
            _id: uuidv4(),
            partyName: 'Engagement Party Katya',
            partyDate: '11/19/20',
            description: 'party at Katya place celebrate her ring'
        },],
    members: [],
    transactions:[],
    expenses:[]
}

const partyManager = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PARTY':
            return {
                ...state,
                parties: [
                    ...state.parties,
                    action.payload
                ]
            }
        case 'ADD_MEMBER':
            return {
                ...state,
                members: [
                    ...state.members,
                    action.payload
                ]
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    action.payload
                ]
            }
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [
                    ...state.expenses,
                    action.payload
                ]
            }
        case 'DELETE_PARTY':
            return {
                ...state,
                cards: state.parties.filter(el => el._id !== action.payload)
            }

        default:
            return state;
    }
}
export default partyManager;