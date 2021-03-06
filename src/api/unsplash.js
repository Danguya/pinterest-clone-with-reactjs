import axios from 'axios';


export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers:{
        Authorization: "seu_api_key_da_unsplash"
    }
});