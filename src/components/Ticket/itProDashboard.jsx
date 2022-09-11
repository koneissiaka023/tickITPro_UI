import { useContext } from "react";
import { ticketContext } from "./availableTickets";




export default function ITProDashboard() {
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
                    <button>Select Ticket</button>
                </tr>
              
            );
        });
        return <tbody>{ticketArray}</tbody>
}