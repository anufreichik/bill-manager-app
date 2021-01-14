const initialTransactions = { transactions:[],}

const transactionReducer = (state=initialTransactions, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    action.payload
                ]
            }
        default:
            return state;
    }
}
export default transactionReducer;