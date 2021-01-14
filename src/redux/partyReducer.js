import {v4 as uuidv4} from "uuid";

const initialState = {
    // parties: [{
    //     _id: uuidv4(),
    //     partyName: 'Christmas Party',
    //     partyDate: '12/14/20',
    //     description: 'party at Valya place'
    // },
    //     {
    //         _id: uuidv4(),
    //         partyName: 'Engagement Party Katya',
    //         partyDate: '11/19/20',
    //         description: 'party at Katya place celebrate her ring'
    //     },],
    parties:[],
}

const partyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PARTIES':
            return {
                ...state,
                parties:action.payload
            }
        case 'ADD_PARTY':
            return {
                ...state,
                parties: [
                    ...state.parties,
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
export default partyReducer;