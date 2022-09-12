import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { ticketTableContext } from "../../App";
import addAuthToken from "../../common/remote/addAuthHeader";
import { tickITProClient } from "../../common/remote/tickitpro-client";


export default function ItProTable (){
    const proId = useSelector((state) => state.loginSlice.id);
    const [tickets] = useContext(ticketTableContext);
    const [formData,setFormData] = useState({
        id: "",
        proUserId: "",
        status: ""
    });

async function resolvedTicket(t){
    try {
        addAuthToken();
        console.log(t);
        const tempForm = {...formData, id: t, proUserId: proId, status: 'RESOLVED' }
        setFormData(tempForm);
        console.log(tempForm);
        const response = await tickITProClient.put("/ticket/secure", tempForm);
        console.log(response.data);
    } catch (error) {
        console.log(error.response.data);
    }
}
    let ticketArray = tickets.map((o) => {
            return (
                <tr key={o.ticketId}>
                    <td>{o.submissionDate}</td>
                    <td>{o.subjectId}</td>
                    <td>{o.description}</td>
                    <td>{o.priority}</td>
                    <td>{o.status}</td>
                    <td>{o.proId}</td>
                    <button onClick={() => resolvedTicket(o.ticketId)}>Resolve</button>
                </tr>
              
            );
        });
        return <tbody>{ticketArray}</tbody>
}