import { ACTION_TYPES } from "../actions/postMessage";

// Estado inicial del array de los datos
const initialState = {
    list: []
}
//postMessage.list
export const postMessage = (state = initialState, action) => {
    switch (action.type) {
        // This case permit to get all the rows from the database
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }
        // This case permit to create a new record on the database
        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        // This case permit to update a record from the database
        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                list: state.list.map(x => x._id === action.payload._id ? action.payload : x)
            }
        // This case permit to delete a record from the database
        case ACTION_TYPES.DELETE:
            return {
                ...state,
                list:state.list.filter(x => x._id !== action.payload)
            }

        default:
            return state;
    }
}