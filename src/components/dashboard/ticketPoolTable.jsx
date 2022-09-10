import { useSelector } from "react-redux";
import TicketPoolTableData from "../Ticket/ticketPoolTableData";

export default function TicketPoolTable() {
    const { tickets, ticketNumber } = useSelector((state) => state.ticketPoolSlice);

    return (
        <div>
            <h1>Number of available tickets: {ticketNumber}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Member Email</th>
                    </tr>
                </thead>
                {/* useEffect is invoked AFTER this is rendered, causing the default to be undefined */}

                <TicketPoolTableData tickets={tickets}></TicketPoolTableData>
            </table>
        </div>
    );
}
