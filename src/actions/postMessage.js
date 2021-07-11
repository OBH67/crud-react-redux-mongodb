import api from "./api.js";

// The different type of actions
export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

// This function permit to get all the data from the database
export const fetchAll = () => dispatch => {
    api.postMessage().fetchAll()
        .then(res => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: res.data
            })
        })
        .catch(err => console.log(err))

}

// This function permit to create a new User on the database
export const create = (data, onSuccess) => dispatch => {
    api.postMessage().create(data)
        .then(res =>{
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

// This function permit to update a record from the database
export const update = (id,data, onSuccess) => dispatch => {
    api.postMessage().update(id,data)
        .then(res =>{
            dispatch({
                type: ACTION_TYPES.UPDATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

// This function permit to delete a record from the database
export const Delete = (id, onSuccess) => dispatch => {
    api.postMessage().delete(id)
        .then(res =>{
            dispatch({
                type: ACTION_TYPES.DELETE,
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}