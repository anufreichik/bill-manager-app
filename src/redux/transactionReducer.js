const initialTransactions = {
    transactions:[],
    transactionInfo:{}
}

const transactionReducer = (state=initialTransactions, action) => {
    switch (action.type) {
        case 'GET_TRANSACTIONS':
            console.log(action.payload)
            return {
                ...state,
                transactions:action.payload
            }
        case 'SET_TRANSACTION_INFO':
            return {
                ...state,
                transactionInfo: action.payload
            }
        default:
            return state;
    }
}
export default transactionReducer;
