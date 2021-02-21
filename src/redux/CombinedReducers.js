import {combineReducers} from 'redux'
import partyReducer from "./partyReducer";
import memberReducer from "./memberReducer";
import expenseReducer from "./expenseReducer";
import transactionReducer from "./transactionReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import debtReducer from "./debtReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
    partyReducer,
    memberReducer,
    expenseReducer,
    transactionReducer,
    userReducer,
    authReducer,
    debtReducer,
    modalReducer
})
