import { InputLabel } from "@mui/material";
import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import DepartmentDropDown from "../Department/departmentDropDown";

export const registerContext = createContext();

export default function Register(){
    const [message, setMessage] = useState();
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        departmentId: ""
    });

    async function register(r){
        r.preventDefault();
        setFormData({...formData, avatar: `https://avatars.dicebear.com/api/bottts/${formData.email}.svg`})
        try{
            console.log(formData);
            const response = await tickITProClient.post("/user", formData);
            setMessage(`User was successfully created! ${response.data.userId}`);
        } catch (error){
            console.log(error);

            if(error.response.status === 400){
                setMessage(`Could not register user: ${error.response.data}`);
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
            onChange = {(e) => {
                setFormData({...formData, email: e.target.value});
            }}
        />
        <div></div>

        <label>First Name:</label>
        <input
            className="registration"
            placeholder="Jane"
            onChange = {(e) => {
                setFormData({...formData, firstName: e.target.value});
            }}
        />
        <div></div>

        <label>Last Name:</label>
        <input
            className="registration"
            placeholder="Doe"
            onChange = {(e) => {
                setFormData({...formData, lastName: e.target.value});
            }}
        /> 
    <div></div> 

    <label>Password:</label>
    <input
        className="registration"
        placeholder="Password"
        onChange = {(e) => {
            setFormData({...formData, password: e.target.value});
        }}
    />
    <div></div>

    <label>Department:</label>
    <registerContext.Provider value={[formData,setFormData]}>
        <DepartmentDropDown />
    </registerContext.Provider>
    <div></div>
    <button onClick={register}>Register</button>
</form>
<p>{message}</p>

</>

);
}