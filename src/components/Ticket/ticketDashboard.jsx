export default function TicketDashboard(){
    const ticketId = useSelector((state) => state.loginSlice.ticketId)

    return(

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