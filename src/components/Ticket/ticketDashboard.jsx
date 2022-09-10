<<<<<<< HEAD
import AddTicketToPool from "./createTicket"
import TicketTable from "./tickets"

=======
>>>>>>> 28ebd295f361b4bd145931357f3faa0e51cb76eb
export default function TicketDashboard(){
    const ticketId = useSelector((state) => state.loginSlice.ticketId)

    return(
<<<<<<< HEAD
=======

>>>>>>> 28ebd295f361b4bd145931357f3faa0e51cb76eb
        <>
            <h1>{ticketId} Ticket Dashboard</h1>
            <p>
                Tickets
            </p>
            <AddTicketToPool></AddTicketToPool>
            <TicketTable></TicketTable>
        </>
    )
}