const initialExpenses = { expenses:[],}

const expenseReducer = (state=initialExpenses, action) => {
    switch (action.type) {

        case 'GET_EXPENSES':
            return {
                ...state,
                expenses:action.payload
            }
        default:
            return state;
    }
}
export default expenseReducer;