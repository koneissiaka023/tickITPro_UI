import { useSelector } from "react-redux";
import DeleteTicketFromPool from "./deleteTicketFromPool";

export default function TicketPoolTableData(props) {
    const email = useSelector((state) => state.loginSlice.email);
    const ticketArray = props.tickets.map((o, i) => {
        return (
            <tr key={i}>
                <td>{o.description}</td>
                <td>{o.priority}</td>
                <td>{o.subject}</td>
                <td>{o.status}</td>
                <td>{email}</td>
                <DeleteTicketFromPool id={i} />
            </tr>
        );
    });

    return <tbody>{ticketArray}</tbody>;
}
