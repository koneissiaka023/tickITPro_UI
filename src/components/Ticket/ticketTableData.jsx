import { useContext } from "react";
import { useSelector } from "react-redux";
import AddTicketToPool from "../dashboard/addTicketToPool";
import { ticketContext } from "./ticketTable";
import DeleteTicket from "./deleteTicket";

export default function TicketTableData() {
    const email = useSelector((state) => state.loginSlice.email);
    const [tickets] = useContext(ticketContext);
    const ticketArray = tickets
        .filter((c) => c.userEmail === email && c)
        .map((o) => {
            return (
                <tr key={o.ticketId}>
                    <td>{o.description}</td>
                    <td>{o.priority}</td>
                    <td>{o.subject}</td>
                    <td>{o.status}</td>
                    <td>{o.userEmail}</td>
                    <AddTicketToPool ticket={{ description: o.description, priority: o.priority, subject: o.subject, status: o.status }} />
                    <DeleteTicket id={o.ticketId} />
                </tr>
            );
        });

    return <tbody>{ticketArray}</tbody>;
}
