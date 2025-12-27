import axios from "axios";

const em_api = axios.create({
    baseURL: "http://localhost:8000/",
    timeout: 10000,
});

export default em_api;