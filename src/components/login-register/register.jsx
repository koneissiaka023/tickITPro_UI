import { useState } from "react";
import { useNavigate } from "react-router";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import DepartmentDropDown from "../Department/departmentDropDown";

export default function Register(){
    const navigate = useNavigate();
    const [message, setMessage] = useState();
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        department: ""
    })

    async function register(r){
        r.preventDefault();
        // setFormData({...formData, avatar: `https://avatars.dicebear.com/api/bottts/${formData.email}.svg`})
        try{
            await tickITProClient.post("/register", formData);
            setMessage('User was successfully created!');
            navigate("/user-dashboard");
        } catch (error){
            if(error.response.status === 400){
                setMessage('Could not register user: ${error.response.data}');
            }
        }
    }


return (
<>  
    <form> 
        {/* <img ></img> */}
        <label>Email:</label>
        <input
            className="registration"
            placeholder="example@mail.com"    
        />
        <div></div>

        <label>First Name:</label>
        <input
            className="registration"
            placeholder="Jane"
        />
        <div></div>

        <label>Last Name:</label>
        <input
            className="registration"
            placeholder="Doe"
        /> 
    <div></div> 

    <label>Password:</label>
    <input
        className="registration"
        placeholder="Password"
    />
    <div></div>

    <label for="departmentDropdown">Department:</label>
    <DepartmentDropDown />
    <div></div>
    <button onClick={register}>Register</button>
</form>

</>

);
}