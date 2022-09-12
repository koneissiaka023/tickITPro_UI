import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { subjectDropdownContext } from "../../App";
import addAuthToken from "../../common/remote/addAuthHeader";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import { subjectEditorRenderContext } from "./adminSubjectEditor";
import SubjectDropDown from "./subjectDropdown";

export const subjectEditorContext = createContext();

export default function EditSubject() {
    const [creation,setCreation] = useContext(subjectEditorRenderContext);
    const [formData,setFormData] = useState({
        id: "",
        subjectId: "",
        name: ""
    });

    async function updateSubject(s) {
        s.preventDefault();
        try {
            addAuthToken();
            formData.id = formData.subjectId;
            console.log(formData);
            const response = await tickITProClient.put("/subject",formData);
            console.log(response.data);
            setCreation(`Subject has been successfully updated! ${response.data.name}`);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    async function createSubject(s) {
        s.preventDefault();
        try {
            addAuthToken();
            console.log(formData);
            const response = await tickITProClient.post("/subject",formData);
            console.log(response.data);
            setCreation(`Subject has been successfully created! ${response.data.name}`);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    async function deleteSubject(s) {
        s.preventDefault();
        try {
            addAuthToken();
            console.log(formData);
            const response = await tickITProClient.delete(`/subject/${formData.subjectId}`);
            console.log(response.data);
            setCreation(`Subject has been successfully deleted! ${response.data}`);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <>
            <form>
                <subjectEditorContext.Provider value={[]}>
                    <subjectDropdownContext.Provider value={[formData,setFormData,creation]}>
                        <SubjectDropDown />
                    </subjectDropdownContext.Provider>
                </subjectEditorContext.Provider>
                <input 
                    placeholder="Subject Name here"
                    onChange = {(e) => {
                        setFormData({...formData, name: e.target.value});
                    }} />
                <button className="navbarButtons" onClick={updateSubject}>Update Subject</button>
                <button className="navbarButtons" onClick={createSubject}>Create Subject</button>
                <button className="navbarButtons" onClick={deleteSubject}>Delete Subject</button>
            </form>
            <p>{creation}</p>
        </>
    );
}