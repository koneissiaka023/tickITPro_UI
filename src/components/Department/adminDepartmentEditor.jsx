import { createContext, useState } from "react";


export const departmentEditorRenderContext = createContext()

export default function AdminDepartmentEditor() {

    const [creation, setCreation] = useState()

    return (
        <>
            <h1>Department Editor</h1>
            <p>
                Select a department from the dropdown to edit/delete it, or create a new department.
            </p>

            <departmentEditorRenderContext.Provider value = {{creation,setCreation}}>
                <EditDepartment></EditDepartment>
            </departmentEditorRenderContext.Provider>
        </>
    );
}