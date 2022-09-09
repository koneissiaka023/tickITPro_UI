import axios from 'axios';

export const tickITProClient = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    },
});