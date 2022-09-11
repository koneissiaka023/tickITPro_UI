import { createContext, useState } from "react";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import DepartmentDropDown from "../Department/departmentDropDown";

export const registerContext = createContext();

export default function Settings() {
    const [message, setMessage] = useState();
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        departmentId: ""
    });

    async function changeUserInformation(r) {
        r.preventDefault();
        setFormData({...formData, avatar: `https://avatars.dicebear.com/api/bottts/${formData.email}.svg`})
        try{
            console.log(formData);
            const response = await tickITProClient.put("/user", formData);
            setMessage(`User was successfully updated! ${response.data.userId}`);
        } catch (error){
            console.log(error);

            if(error.response.status === 400){
                setMessage(`Could not update user: ${error.response.data}`);
            }
        }
    }
    return (
        <>  
    <form> 
        <label>Email:</label>
        <input
            // className="registration"
            placeholder="example@mail.com"
            onChange = {(e) => {
                setFormData({...formData, email: e.target.value});
            }}
        />
        <div></div>

        <label>First Name:</label>
        <input
            // className="registration"
            placeholder="Jane"
            onChange = {(e) => {
                setFormData({...formData, firstName: e.target.value});
            }}
        />
        <div></div>

        <label>Last Name:</label>
        <input
            // className="registration"
            placeholder="Doe"
            onChange = {(e) => {
                setFormData({...formData, lastName: e.target.value});
            }}
        /> 
    <div></div> 

    <label>Password:</label>
    <input
        // className="registration"
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
    <button onClick={changeUserInformation}>Update</button>
</form>
<p>{message}</p>

</>

    );
}