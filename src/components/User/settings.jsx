import { createContext, useState } from "react";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import { departmentDropdownContext } from "../../App";
import DepartmentDropDown from "../Department/departmentDropDown";

export const settingsContext = createContext();

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
        
        <div className="layout">
     
    <form> 
   <h3> Anything left blank will not be updated.</h3>
   <div></div>
   <table>

   <tr> 
        <td class="settingsLabel"><label>Email:</label></td>
        <input
            className="registration"
            placeholder="New Email ?"
            onChange = {(e) => {
                setFormData({...formData, email: e.target.value});
            }}
        />
        <div></div>
        </tr>
        <tr> 
        <td class="settingsLabel">
        <label>First Name:</label></td>
        <input
            className="registration"
            placeholder="New First Name ?"
            onChange = {(e) => {
                setFormData({...formData, firstName: e.target.value});
            }}
        />
        <div></div>
        </tr>
        <tr> 
        <td class="settingsLabel">
        <label>Last Name:</label></td>
        <input
            className="registration"
            placeholder="New Last Name?"
            onChange = {(e) => {
                setFormData({...formData, lastName: e.target.value});
            }}
        /> 
        </tr>
    <div></div> 
    <tr> 
        <td class="settingsLabel">
    <label>Password:</label></td>
    <input
        className="registration"
        placeholder="New Password?"
        onChange = {(e) => {
            setFormData({...formData, password: e.target.value});
        }}
    />
    <div></div>
    </tr>
    <tr> 
        <td class="settingsLabel">
    <label>Department:</label></td>
    <settingsContext.Provider>
        <departmentDropdownContext.Provider value={[formData,setFormData]}>
            <DepartmentDropDown />
        </departmentDropdownContext.Provider>
    </settingsContext.Provider>
    <div></div>
    </tr>
    </table>
    <button onClick={changeUserInformation}>Update</button>
</form>
<p>{message}</p>
</div>
</>

    );
}