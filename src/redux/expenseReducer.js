const initialExpenses = {
    expenses:[],
    expenseInfo:{}
}

const expenseReducer = (state=initialExpenses, action) => {
    switch (action.type) {

        case 'GET_EXPENSES':
            return {
                ...state,
                expenses:action.payload
            }
        case 'SET_EXPENSE_INFO':
            return{
                ...state,
                expenseInfo: action.payload
            }
        default:
            return state;
    }
}
export default expenseReducer;
