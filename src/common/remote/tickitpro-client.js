import axios from 'axios';

export const tickITProClient = axios.create({
<<<<<<< HEAD
    baseURL: "http://localhost:8080",
=======
    baseURL: "http://tickitpro-env.eba-b8m8caz3.us-east-1.elasticbeanstalk.com/",
>>>>>>> b2a8571a6428c6743c2c9708365f5c5c603daf2f
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    },
});