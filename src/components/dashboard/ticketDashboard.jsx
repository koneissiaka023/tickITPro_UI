import { useSelector } from "react-redux";
// import TicketPoolTable from "./ticketPoolTable";
// import CreateTicketPool from "./createTicketPool";

export default function Dashboard() {
    const email = useSelector((state) => state.loginSlice.email);

    return (
        <>
            <h1>Welcome to TickItPro Dashboard</h1>
            <p>
                Tickets you created will be submitted under the account: {email}
            </p>
            {/* <CreateTicketPool /> */}
            {/* <TicketPoolTable /> */}
        </>
    );
}
