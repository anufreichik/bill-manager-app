const initialExpenses = { expenses:[],}

const expenseReducer = (state=initialExpenses, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [
                    ...state.expenses,
                    action.payload
                ]
            }
        default:
            return state;
    }
}
export default expenseReducer;