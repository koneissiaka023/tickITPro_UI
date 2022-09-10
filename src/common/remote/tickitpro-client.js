import axios from 'axios';

export const tickITProClient = axios.create({
    baseURL: "http://tickitpro-env.eba-b8m8caz3.us-east-1.elasticbeanstalk.com/",

    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    },
});