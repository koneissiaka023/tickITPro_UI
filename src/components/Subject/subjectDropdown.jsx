import { createContext, useContext, useEffect, useState } from "react";
import addAuthToken from "../../common/remote/addAuthHeader";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import { ticketCreationContext } from "../dashboard/createTicket";
import SubjectDropDownData from "./subjectDropdownData";

export const subjectContext = createContext();

export default function SubjectDropDown() {
    const [subjects, setSubjects] = useState();
    const [formData, setFormData] = useContext(ticketCreationContext);

    useEffect(() => {
        console.log("effect invoked inside SubjectDropDown");
        findAll();
    }, []);

    async function findAll() {
        try {
            addAuthToken();
            const response = await tickITProClient.get("/subject");
            console.log(response.data);
            setSubjects(response.data);
            setFormData({...formData, subjectId: response.data[0].subjectId});
        } catch (error) {
            console.error(error);
        }
    }

    function updateSubject(e) {
        console.log(e);
        setFormData({...formData, subjectId: e.target.value});
    }

    return (
        <select onChange={updateSubject} name="subjectDropdown" id="subjectDropdown">
            <subjectContext.Provider value={[subjects, setSubjects]}>
                {subjects === undefined || <SubjectDropDownData />}
            </subjectContext.Provider>
        </select>
    );

}