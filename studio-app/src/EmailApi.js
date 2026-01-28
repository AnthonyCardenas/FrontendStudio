import axios from "axios";

// import { API_URL } from ".";

const em_api = axios.create({
    baseURL: "http://localhost:8000/",
    // baseURL: API_URL,
    timeout: 10000,
});

export default em_api;