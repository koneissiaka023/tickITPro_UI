import { createContext, useContext, useEffect, useState } from "react";
import { departmentDropdownContext } from "../../App";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import DepartmentDropdownData from "./departmentDropdownData";

export const departmentContext = createContext();

export default function DepartmentDropDown() {
    const [departments, setDepartments] = useState();
    const [formData, setFormData] = useContext(departmentDropdownContext);

    useEffect(() => {
        console.log("effect invoked inside DepartmentDropDown");
        findAll();
    }, []);

    async function findAll() {
        try {
            const response = await tickITProClient.get("/department");
            console.log(response.data);
            setDepartments(response.data);
            setFormData({...formData, departmentId: response.data[0].departmentId});
        } catch (error) {
            console.error(error);
        }
    }

    function updateDepartment(e) {
        console.log(e);
        setFormData({...formData, departmentId: e.target.value});
    }

    return (
        <select onChange={updateDepartment} name="departmentDropdown" id="departmentDropdown">
            <departmentContext.Provider value={[departments, setDepartments]}>
                {departments === undefined || < DepartmentDropdownData/>}
            </departmentContext.Provider>
        </select>
    );

}