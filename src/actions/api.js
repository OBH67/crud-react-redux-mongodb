import axios from 'axios';

const baseUrl = 'http://localhost:4000/postmessages/'

export default {
    postMessage(url=baseUrl) {
        return {
            fetchAll: () => axios.get(baseUrl),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}