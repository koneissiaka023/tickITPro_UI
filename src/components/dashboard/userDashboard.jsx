import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { useSelector } from "react-redux";
import CreateTicket from "./createTicket";
import TicketPoolTable from "./ticketPoolTable";

export const dashboardRenderContext = createContext();

export default function UserDashboard() {
    const email = useSelector((state) => state.loginSlice.email);
    const [creation, setCreation] = useState();

    return (
    <>
        <div>
            <h1>Welcome to Your TickITPro Dashboard!</h1>
            <p>Tickets you create will be submitted under the account: {email}</p>
        </div>
        
        <dashboardRenderContext.Provider value={[creation,setCreation]}>
            <CreateTicket />
            <TicketPoolTable />
        </dashboardRenderContext.Provider>
    </>
    );
}