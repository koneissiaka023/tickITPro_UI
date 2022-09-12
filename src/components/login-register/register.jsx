import { InputLabel } from "@mui/material";
import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import DepartmentDropDown from "../Department/departmentDropDown";
import { departmentDropdownContext } from "../../App";

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

            if(error.response.status === 500){
                setMessage(`First name can not be empty\n Last name can not be empty\n Password must contain a minimum of eight characters, at least one letter, one number, and one special character(@$!%*#?&)`)
            }
        }
    }


return (
<>  
    <form> 
        {/* <img ></img> */}
        <label htmlFor="email"><b>Email</b></label>
        <input
            className="registration"
            placeholder="example@mail.com"
            onChange = {(e) => {
                setFormData({...formData, email: e.target.value});
            }}
            type="text"
        />
        <div></div>
        <label htmlFor="firstName"><b>First Name</b></label>
        <input
            className="registration"
            placeholder="Jane"
            onChange = {(e) => {
                setFormData({...formData, firstName: e.target.value});
            }}
            type="text"
        />
        <div></div>

        <label htmlFor="lastName"><b>Last Name</b></label>
        <input
            className="registration"
            placeholder="Doe"
            onChange = {(e) => {
                setFormData({...formData, lastName: e.target.value});
            }}
            type="text"
        /> 
    <div></div> 

    <label htmlFor="paswd"><b>Password</b></label>
    <input
        className="registration"
        placeholder="Password"
        onChange = {(e) => {
            setFormData({...formData, password: e.target.value});
        }}
        type="text"
    />
    <div></div>

    <label><b>Department</b></label>
    <registerContext.Provider  value={[]}>
        <departmentDropdownContext.Provider value={[formData,setFormData]}>
            <DepartmentDropDown />
        </departmentDropdownContext.Provider>
    </registerContext.Provider>
    <div></div>
    <button onClick={register}>Register</button>
</form>
<p>{message}</p>

</>

);
}