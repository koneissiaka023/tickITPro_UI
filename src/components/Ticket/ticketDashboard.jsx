<<<<<<< HEAD
export default function TicketDashboard() {



    
    return (
=======
export default function TicketDashboard(){
    const ticketId = useSelector((state) => state.loginSlice.ticketId)

    return(
>>>>>>> b2a8571a6428c6743c2c9708365f5c5c603daf2f
        <>
            <h1>{ticketId} Ticket Dashboard</h1>
            <p>
                Tickets
            </p>
            <CreateTicketPool></CreateTicketPool>
            <CreateTicketTable></CreateTicketTable>
        </>
    )
}