import { useContext } from "react";
import { departmentContext } from "./departmentDropDown";

export default function DepartmentDropdownData(props) {
    const [departments] = useContext(departmentContext);

    function renderDepartmentOption(o) {
        return(
            <option value={o.departmentId}>
                {o.departmentName}
            </option>
        )
    }

    let departmentArray;
    departmentArray = departments.map((o) => {
        return renderDepartmentOption(o);
    })
}