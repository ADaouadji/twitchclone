import axios from 'axios';

let api = axios.create({
    headers: {
        "Client-ID": "*",
        "Authorization": "*"
        }
})


export default api;
