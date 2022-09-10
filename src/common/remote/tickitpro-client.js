import axios from 'axios';

export const tickITProClient = axios.create({
    baseURL: "http://tickitpro-env.eba-b8m8caz3.us-east-1.elasticbeanstalk.com/",
<<<<<<< HEAD
=======

>>>>>>> b9faddd6b1be7e09a9fa419f9ef08b5e44d84f0c
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    },
});