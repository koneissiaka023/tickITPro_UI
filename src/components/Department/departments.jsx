import { createContext, useContext, useState } from "react";

export const departmentContext = createContext();

export default function DepartmentTable() {
    const [departments, setDepartments] = useState();
    const [showTable, setShowTable] = useState(true);
}