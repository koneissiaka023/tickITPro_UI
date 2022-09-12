import { createContext, useEffect, useState } from "react";
import addAuthToken from "../../common/remote/addAuthHeader";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import TicketTable from "./ticketTable";
import { ticketTableContext } from "../../App";



export const ticketContext = createContext();

export default function AvailableTickets(props) {
    const status = "PENDING"
    const [tickets, setTickets] = useState();
    const [showTable, setShowTable] = useState(true);

    useEffect(() => {
        findAll();
        
    }, [showTable,tickets])

    async function findAll(){
        try{
            addAuthToken();
            const response = await tickITProClient.get(`/ticket/status/${status}`);
            setTickets(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    function renderTable(){
        showTable ? setShowTable(false) : setShowTable(true)
    }

    return (
        <>
            {/* <button onClick={renderTable}>Show Tickets</button> */}
            {showTable === true ? (
                <table sx={{maxWidth: 1000}} style={{border: "black solid"}} align="center">
                    <thead>
                        <tr>
                            <th align="center">Submission Date</th>
                            <th align="center">Subject ID</th>
                            <th align="center">Description</th>
                            <th align="center">Priority</th>
                            <th align="center">Status</th>
                            {/* <th align="center">ITPro ID</th> */}
                        </tr>
                    </thead>
                    <ticketContext.Provider>
                        <ticketTableContext.Provider value={[tickets,setTickets]}>
                        {tickets === undefined || <TicketTable/> }
                        </ticketTableContext.Provider>
                    </ticketContext.Provider>
                </table>
            ) : (
                <p>table hidden</p>
            )}

        </>     
    )
}