import { useContext } from "react";
import { useSelector } from "react-redux";
import { departmentContext } from "./departmentDropDown";

export default function DepartmentDropdownData(props) {
    const [departments] = useContext(departmentContext);


    function renderDepartmentOption(o) {
        return(
            <option key={o.departmentId} value={o.departmentId}>
                {o.departmentName}
            </option>
        )
    }

    let departmentArray;
    departmentArray = departments.map((o) => {
        return renderDepartmentOption(o);
    })

    return departmentArray;
}