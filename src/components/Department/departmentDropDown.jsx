import { createContext, useEffect, useState } from "react";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import DepartmentDropdownData from "./departmentDropdownData";

export const departmentContext = createContext();

export default function DepartmentDropDown() {
    const [departments, setDepartments] = useState();

    useEffect(() => {
        console.log("effect invoked inside DepartmentDropDown");
        findAll();
    }, []);

    async function findAll() {
        try {
            const response = await tickITProClient.get("/department");
            console.log(response.data);
            setDepartments(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
    <select>
        <departmentContext.Provider value={[departments, setDepartments]}>
            {departments === undefined || < DepartmentDropdownData/>}
        </departmentContext.Provider>
    </select>
    );

}