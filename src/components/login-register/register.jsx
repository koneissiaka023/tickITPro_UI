import { useState } from "react";
import { useNavigate } from "react-router";
import { tickITProClient } from "../../common/remote/tickitpro-client";

export default function Register(){
    const navigate = useNavigate();
    const [Message, setMessage] = useState();
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        department: ""
    
    })


    async function register(r){
        r.preventDefault();
        try{
            await tickITProClient.post("/register", formData);
            setMessage('User was successfully created!');
        } catch (error){
            if(error.response.status === 400){
                setMessage('Could not register user: ${error.response.data}');
            }
        }
    }


return(
<>  
<form> 
    <img ></img>
    <label>Email:</label>
    <input
        class="registration"
        placeholder="example@mail.com"    
    />
    <div></div>

    <label>First Name:</label>
    <input
        class="registration"
        placeholder="Jane"
    />
    <div></div>

    <label>Last Name:</label>
    <input
        class="registration"
        placeholder="Doe"
    /> 
    <div></div> 

    <label>Password:</label>
    <input
        class="registration"
        placeholder="Password"
    />
    <div></div>

    <label>Department:</label>
    <select>
        <option value="HR">HR</option>
        <option value="IT">IT</option>
    </select>
    <div></div>
    <button onClick={register} on>Register</button>
</form>
    

</>

);
}