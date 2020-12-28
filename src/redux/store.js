import {createStore, applyMiddleware} from "redux";
import partyManager from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
    partyManager,
    composeWithDevTools(applyMiddleware())
);

export default store;