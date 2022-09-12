import DepartmentDropDown from "./departmentDropDown"
import {createContext, useContext, useState } from "react"
import { departmentDropdownContext } from "../../App"
import addAuthToken from "../../common/remote/addAuthHeader"
import { tickITProClient } from "../../common/remote/tickitpro-client"
import { subjectEditorContext } from "../Subject/editSubject"

export const departmentEditorContext = createContext()

export default function EditDepartment(){
    const [creation,setCreation] = useContext(subjectEditorContext)

    const [formData,setFormData] = useState({
        id: "",
        name: ""
    });

    async function createDepartment(d) {
        d.preventDefault();
        try {
            addAuthToken();
            console.log(formData);
            const response = await tickITProClient.post("/department",formData);
            console.log(response.data);
            setCreation(`Department has been successfully created! ${response.data.name}`);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    async function updateDepartment(d){
        d.preventDefault()
        try{
            addAuthToken()
            console.log(formData)
            const response = await tickITProClient.post("/department", formData)
            console.log(response.data)
            setCreation(`Department successfully created ${response.data.name}`)
        } catch(error){
            console.log(error.response.data)
        }      
    }

    async function deleteDepartment (d) {
        d.preventDefault()
        try {
            addAuthToken()
            console.log(formData)
            const response = await tickITProClient.post("/department", formData)
            console.log(response.data)
            setCreation(`Department successfully deleted ${response.data.name}`)
        } catch(error){
            console.log(error.response.data)
        }      
}
    


    return (
        <>
            <form><departmentEditorContext.Provider>
                <departmentDropdownContext.Provider value = {{formData, setFormData}}>
                    <DepartmentDropDown></DepartmentDropDown>
                </departmentDropdownContext.Provider>
            </departmentEditorContext.Provider>
            <input 
                    placeholder="Department Name here"
                    onChange = {(e) => {
                        setFormData({...formData, name: e.target.value});
                    }} />
                <button onClick={updateDepartment}>Update Department</button>
                <button onClick={createDepartment}>Create Department</button>
                <button onClick={deleteDepartment}>Delete Department</button>
            </form>
            <p>{creation}</p>
        </>
    )
}