import { useSelector } from "react-redux"
import { TicketTableData } from "./ticketData";

export default function TicketPool() {
 
    const {tickets, ticketId} = useSelector((state) => state.ticketPoolSlice)
 
    return (
        <>
            <h1>Ticket Pool: {ticketId}</h1>
        
        <TicketTableData tickets={tickets}></TicketTableData>
        </>
    );
}