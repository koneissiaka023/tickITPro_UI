import { createContext, useState } from "react";
import EditSubject from "./editSubject";

export const subjectEditorRenderContext = createContext();

export default function AdminSubjectEditor() {
    const [creation,setCreation] = useState();

    return (
        <>
            <h1>Admin Subject Editor</h1>
            <p>
                Select a subject from the dropdown to edit/delete it, or create a new subject
            </p>
            <subjectEditorRenderContext.Provider value={[creation,setCreation]}>
                <EditSubject />
            </subjectEditorRenderContext.Provider>
        </>
    );
}