import { useSelector } from "react-redux";
import CreateTicketPool from "./createTicketPool";
import TicketPoolTable from "./ticketPoolTable";

export default function Dashboard() {
    const email = useSelector((state) => state.loginSlice.email);

    return (
    <>
        <h1>Welcome to Your TickITPro Dashboard!</h1>
        <p>
            Tickets you create will be submitted under the account: {email}
        </p>
        <CreateTicketPool />
        {<TicketPoolTable />}
    </>
    );
}