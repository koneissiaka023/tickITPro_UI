import { useContext, useState } from "react";
import addAuthToken from "../../common/remote/addAuthHeader";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import { userEditorRenderContext } from "./adminUserEditor";
import { userContext } from "./userTable";

export default function UserTableData() {
    const [users,setUsers] = useContext(userContext);
    const [creation,setCreation] = useContext(userEditorRenderContext);
    const [formData, setFormData] = useState({
        id: "",
        role: ""
    });

    async function updateRole(userId,role) {
        try {
            addAuthToken();
            const tempForm = {...formData, id: userId, role: role};
            setFormData(tempForm);
            const response = await tickITProClient.put(`/user`,formData);
            setCreation(`User Role successfully updated! ${response.data.role}`);
        } catch (error) {
            console.error(error);
        }
    }

    let userArray = users.map((o) => {
        return (
            <tr key={o.userId}>
                <td>{o.email}</td>
                <td>{o.firstName}</td>
                <td>{o.lastName}</td>
                <td>{o.departmentId}</td>
                <td>{o.role}</td>
                <td>
                    <button onClick={() => updateRole(o.userId,"USER")}>Make User</button>
                    <button onClick={() => updateRole(o.userId,"IT_PRO")}>Make ITPro</button>
                    <button onClick={() => updateRole(o.userId,"ADMIN")}>Make Admin</button>
                </td>
            </tr>
        )
    })

    return(<tbody>{userArray}</tbody>);
}