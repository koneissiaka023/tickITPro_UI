import { createContext, useEffect, useState } from "react";
import UserTable from "./userTable";

export const userEditorRenderContext = createContext();

export default function AdminUserEditor() {
    const [creation,setCreation] = useState();

    useEffect(() => {
        console.log("effect invoked inside of AdminUserEditor");
    }, [creation]);

    return (
        <>
            <h1>Admin User Editor</h1>
            <p>
                Update User roles next to their profile
            </p>
            <userEditorRenderContext.Provider value={[creation,setCreation]}>
                <UserTable />
            </userEditorRenderContext.Provider>
        </>
    );
}