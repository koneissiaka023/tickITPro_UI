import { createContext, useEffect, useState } from "react";
import EditDepartment from "./editDepartment";


export const departmentEditorRenderContext = createContext()

export default function AdminDepartmentEditor() {
    const [creation, setCreation] = useState();

    useEffect(() => {
        console.log("effect invoked inside of createContext");
    }, [creation]);

    return (
        <>
            <h1>Department Editor</h1>
            <p>
                Select a department from the dropdown to edit/delete it, or create a new department.
            </p>

            <departmentEditorRenderContext.Provider value = {[creation,setCreation]}>
                <EditDepartment />
            </departmentEditorRenderContext.Provider>
        </>
    );
}