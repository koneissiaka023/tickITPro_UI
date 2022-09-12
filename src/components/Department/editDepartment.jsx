import DepartmentDropDown from "./departmentDropDown"
import {createContext, useContext, useState } from "react"
import { departmentDropdownContext } from "../../App"
import addAuthToken from "../../common/remote/addAuthHeader"
import { tickITProClient } from "../../common/remote/tickitpro-client"
import { subjectEditorContext } from "../Subject/editSubject"
import { departmentEditorRenderContext } from "./adminDepartmentEditor"

export const departmentEditorContext = createContext()

export default function EditDepartment(){
    const [creation,setCreation] = useContext(departmentEditorRenderContext);
    const [formData,setFormData] = useState({
        id: "",
        departmentId: "",
        departmentName: ""
    });

    async function createDepartment(d) {
        d.preventDefault();
        try {
            addAuthToken();
            console.log(formData);
            const response = await tickITProClient.post("/department",formData);
            console.log(response.data);
            setCreation(`Department has been successfully created! ${response.data.departmentName}`);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    async function updateDepartment(d){
        d.preventDefault()
        try{
            addAuthToken()
            formData.id = formData.departmentId;
            console.log(formData)
            const response = await tickITProClient.put("/department", formData);
            console.log(response.data)
            setCreation(`Department successfully updated ${response.data.departmentName}`)
        } catch(error){
            console.log(error.response.data)
        }      
    }

    async function deleteDepartment (d) {
        d.preventDefault()
        try {
            addAuthToken()
            console.log(formData)
            const response = await tickITProClient.delete(`/department/${formData.departmentId}`);
            console.log(response.data)
            setCreation(`Department successfully deleted!`)
        } catch(error){
            console.log(error.response.data)
        }      
}
    


    return (
        <>
            <form>
            <departmentEditorContext.Provider value={[]}>
                <departmentDropdownContext.Provider value = {[formData, setFormData, creation]}>
                    <DepartmentDropDown></DepartmentDropDown>
                </departmentDropdownContext.Provider>
            </departmentEditorContext.Provider>
            <input 
                    placeholder="Department Name here"
                    onChange = {(e) => {
                        setFormData({...formData, departmentName: e.target.value});
                    }} />
                <button className="navbarButtons" onClick={updateDepartment}>Update Department</button>
                <button className="navbarButtons" onClick={createDepartment}>Create Department</button>
                <button className="navbarButtons" onClick={deleteDepartment}>Delete Department</button>
            </form>
            <p>{creation}</p>
        </>
    )
}