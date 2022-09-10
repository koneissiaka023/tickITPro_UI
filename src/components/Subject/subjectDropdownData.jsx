import { useContext } from "react";
import { subjectContext } from "./subjectDropdown";

export default function SubjectDropDownData() {
    const [subjects] = useContext(subjectContext);

    function renderSubjectOption(o) {
        return(
            <option key={o.subjectId} value={o.subjectId}>
                {}
            </option>
        )
    }

    return(
        <></>
    );
}