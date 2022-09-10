import { useContext } from "react";
import { subjectContext } from "./subjectDropdown";

export default function SubjectDropDownData() {
    const [subjects] = useContext(subjectContext);

    function renderSubjectOption(o) {
        return(
            <option key={o.id} value={o.id}>
                {o.name}
            </option>
        )
    }

    let subjectArray;
    subjectArray = subjects.map((o) => {
        return renderSubjectOption(o);
    })

    return subjectArray;
}