import DepartmentDropDown from "./departmentDropDown"
import {createContext, useState } from "react"
import DepartmentDropDown from "./departmentDropdown"


export const departmentEditorContext = createContext()

export default function EditDepartment(){
    const [formData, setFormData] = useState()

    return (
        <>
            <departmentEditorContext.Provider>
                <departmentDropdownContext.Provider value = {{formData, setFormData}}>
                    <DepartmentDropDown></DepartmentDropDown>
                </departmentDropdownContext.Provider>
            </departmentEditorContext.Provider>
        </>
    )
}