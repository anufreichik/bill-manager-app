const initialDebts = { debts:[], debtsSum:[]}

const expenseReducer = (state=initialDebts, action) => {
    switch (action.type) {

        case 'GET_DEBTS':
            return {
                ...state,
                debts:action.payload
            }
        case 'GET_DEBTS_SUM':
            return {
                ...state,
                debtsSum:action.payload
            }

        default:
            return state;
    }
}
export default expenseReducer;
