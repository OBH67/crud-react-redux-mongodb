import axios from 'axios';

// The url of the api
const baseUrl = 'http://localhost:4000/postmessages/'

export default {
    postMessage(url=baseUrl) {
        // Here we store al the diferent routes of the api
        return {
            fetchAll: () => axios.get(baseUrl), // Get all the data by the url
            fetchById: id => axios.get(url + id), //  Get a single row from the database using the url of the api and the id of the row
            create: newRecord => axios.post(url, newRecord), // Create a new record on the database using the url and the data 
            update: (id, updateRecord) => axios.put(url + id, updateRecord), // Update a record from the database using the url of the api, id and the new data
            delete: id => axios.delete(url + id) // Delete a record from the database using the url and passing the id of the record
        }
    }
}