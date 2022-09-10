import AddTicketToPool from "./createTicket"
import TicketTable from "./tickets"
import { useSelector } from "react-redux"

export default function UserDashboard(){
    const ticketId = useSelector((state) => state.loginSlice.ticketId)

    return(


        <>
            <h1>{ticketId} Ticket Dashboard</h1>
            <p>
                Tickets
            </p>
            <AddTicketToPool />
            <TicketTable />
        </>
    )
}