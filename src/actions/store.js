import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../reducers";

// Here we recive the difernt reducers 
export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk), // this permit execute async functions
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)