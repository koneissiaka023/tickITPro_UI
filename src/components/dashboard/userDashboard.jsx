import { useSelector } from "react-redux";
import CreateTicket from "./createTicket";
import TicketPoolTable from "./ticketPoolTable";

export default function UserDashboard() {
    const email = useSelector((state) => state.loginSlice.email);

    return (
    <>
        <h1>Welcome to Your TickITPro Dashboard!</h1>
        <p>
            Tickets you create will be submitted under the account: {email}
        </p>
        <CreateTicket />
        <TicketPoolTable />
    </>
    );
}