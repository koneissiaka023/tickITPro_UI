import { useContext } from "react";
import { useSelector } from "react-redux";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import DeleteTicketFromPool from "./deleteTicketFromPool";
import { ticketContext } from "./ticketPoolTable";

export default function TicketPoolTableData(props) {
    const [tickets] = useContext(ticketContext);
    
    
    let ticketArray = tickets.map((o) => {
        return (
            <tr key={o.ticketId}>
                <td>{o.submissionDate}</td>
                <td>{o.subjectId}</td>
                <td>{o.description}</td>
                <td>{o.priority}</td>
                <td>{o.status}</td>
                <td>{o.proId}</td>
            </tr>
        );
    });

    return <tbody>{ticketArray}</tbody>;
}
