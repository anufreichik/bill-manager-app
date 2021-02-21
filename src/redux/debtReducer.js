const initialDebts = { debts:[],}

const expenseReducer = (state=initialDebts, action) => {
    switch (action.type) {

        case 'GET_DEBTS':
            return {
                ...state,
                debts:action.payload
            }
        default:
            return state;
    }
}
export default expenseReducer;
