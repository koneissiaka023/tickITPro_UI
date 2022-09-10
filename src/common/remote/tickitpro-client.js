import axios from 'axios';

export const tickITProClient = axios.create({
<<<<<<< HEAD
    baseURL: "http://tickitpro-env.eba-b8m8caz3.us-east-1.elasticbeanstalk.com/",
=======
    baseURL: "http://localhost:8080",
>>>>>>> 347e9b30b155339f7b7ef74dba9a33e539310800

    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    },
});