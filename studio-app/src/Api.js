import axios from "axios";

// import { API_URL } from ".";
// import { BASE_URL } from ".";

const api = axios.create({
    baseURL: "http://localhost:8000/",
    // baseURL: API_URL,
    timeout: 10000,
});

// const em_api = axios.create({
//   baseURL: "http://localhost:8000",
//   timeout: 10000, // in milli seconds
// });

export default api;
