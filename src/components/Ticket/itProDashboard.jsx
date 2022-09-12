import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import addAuthToken from "../../common/remote/addAuthHeader";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import TicketTable from "./ticketTable";
import { ticketTableContext } from "../../App";
import ItProTable from "./itProTable";

export const ticketContext = createContext();

export default function ITProDashboard() {
   const proId = useSelector((state) => state.loginSlice.id);
   const [tickets, setTickets] = useState();
   const [showTable, setShowTable] = useState(true);

   useEffect(() => {
        findAll();
   }, [tickets])

   async function findAll(){
        try{
            addAuthToken();
            const response = await tickITProClient.get(`/ticket/itpro/${proId}`)
            setTickets(response.data);
        } catch(error){
            console.error(error);
        }
   }

   return(
    <>
    {/* <button>Show Tickets</button> */}
    {showTable === true ? (
        <table align="center">
            <thead>
                <tr>
                        <th align="center">Submission Date</th>
                        <th align="center">Subject ID</th>
                        <th align="center">Description</th>
                        <th align="center">Priority</th>
                        <th align="center">Status</th>
                        <th align="center">ITPro ID</th>
                </tr>
            </thead>
            <ticketContext.Provider>
                <ticketTableContext.Provider value={[tickets, setTickets]}>
                    {tickets === undefined || <ItProTable/>}
                </ticketTableContext.Provider>
            </ticketContext.Provider>
        </table>
    ) : (
        <p>table hidden</p>
    )}
    </>
   )
}