import axios from 'axios';

export const tickITProClient = axios.create({
<<<<<<< HEAD
<<<<<<< HEAD
    baseURL: "http://tickitpro-env.eba-b8m8caz3.us-east-1.elasticbeanstalk.com/",
<<<<<<< HEAD
=======
=======
    baseURL: "http://localhost:8080/",
>>>>>>> e9c73d3aff2901548e1c62e1c2c4d271497d57fe
=======
    baseURL: "http://tickitpro-env.eba-b8m8caz3.us-east-1.elasticbeanstalk.com/",
    // baseURL: "http://localhost:8080/",
>>>>>>> 5c1bc0869e85c7efe4444235a46c5a45f1620deb

>>>>>>> b9faddd6b1be7e09a9fa419f9ef08b5e44d84f0c
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    },
});