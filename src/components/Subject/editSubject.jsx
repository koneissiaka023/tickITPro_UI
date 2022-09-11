import { createContext, useState } from "react";
import { subjectDropdownContext } from "../../App";
import SubjectDropDown from "./subjectDropdown";

export const subjectEditorContext = createContext();

export default function EditSubject() {
    const [formData,setFormData] = useState();

    return (
        <>
            <subjectEditorContext.Provider>
                <subjectDropdownContext.Provider value={[formData,setFormData]}>
                    <SubjectDropDown/>
                </subjectDropdownContext.Provider>
            </subjectEditorContext.Provider>
        </>
    );
}