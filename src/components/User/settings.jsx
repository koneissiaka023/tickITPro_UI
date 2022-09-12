import { createContext, useState } from "react";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import { departmentDropdownContext } from "../../App";
import DepartmentDropDown from "../Department/departmentDropDown";
import { useDispatch, useSelector } from "react-redux";
import { loginStore } from "../login-register/loginSlice";

export const settingsContext = createContext();

export default function Settings() {
    const userState = useSelector((state) => state.loginSlice);
    const [message, setMessage] = useState();
    const dispatch = useDispatch();
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
            console.log(userState);
            const response = await tickITProClient.put("/user", formData);
            console.log(response.data);
            dispatch(loginStore(userState));
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
                <h3> Anything left blank will not be updated.</h3>
                <ul className="login_button">
                <form>
                    <label>Email:</label>
                    <input
                    className="registration"
                    placeholder="New Email ?"
                    onChange = {(e) => {
                        setFormData({...formData, email: e.target.value});
                    }} />
                    <div></div>
                    <label>First Name:</label>
                    <input
                    className="registration"
                    placeholder="New First Name ?"
                    onChange = {(e) => {
                        setFormData({...formData, firstName: e.target.value});
                    }} />
                    <div></div>
                    <label>Last Name:</label>
                    <input
                    className="registration"
                    placeholder="New Last Name?"
                    onChange = {(e) => {
                        setFormData({...formData, lastName: e.target.value});
                    }} />
                    <div></div>
                    <label>Password:</label>
                    <input
                    className="registration"
                    placeholder="New Password?"
                    onChange = {(e) => {
                        setFormData({...formData, password: e.target.value});
                    }}/>
                    <div></div>
                    <label>Department:</label>
                    <settingsContext.Provider value={[]}>
                        <departmentDropdownContext.Provider value={[formData,setFormData]}>
                            <DepartmentDropDown />
                        </departmentDropdownContext.Provider>
                    </settingsContext.Provider>
                    <button onClick={changeUserInformation}>Update</button>
                </form>
                <p>{message}</p>
                </ul>
            </div>
        </>
    );
}