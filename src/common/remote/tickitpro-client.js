import axios from 'axios';

export const tickITProClient = axios.create({
<<<<<<< HEAD
    baseURL: "http://tickitpro-env.eba-b8m8caz3.us-east-1.elasticbeanstalk.com/",
    // baseURL: "http://localhost:8080/",
=======

    baseURL: "http://tickitpro-env.eba-b8m8caz3.us-east-1.elasticbeanstalk.com/",

>>>>>>> 32474ef287b0fe209fe07094d0aeb609c02317f6
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    },
});