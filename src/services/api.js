import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:8443'
});

export default api;