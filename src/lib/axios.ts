import axios from "axios";



// Create an Axios instance
const api = axios.create({
    baseURL: process.env.GATSBY_API_URL
});
console.log("33333333",api)

// Check if the base URL is set
if (!api.defaults.baseURL) {
    console.error("Base URL is not set. Please make sure REACT_APP_API_SERVICE environment variable is defined.");
}

export default api;
