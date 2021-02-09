const initialTransactions = { transactions:[],}

const transactionReducer = (state=initialTransactions, action) => {
    switch (action.type) {
        case 'GET_TRANSACTIONS':
            console.log(action.payload)
            return {
                ...state,
                transactions:action.payload
            }
        default:
            return state;
    }
}
export default transactionReducer;
