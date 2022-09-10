import { findAllByAltText } from "@testing-library/react";
import { setUseProxies } from "immer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import TicketPoolTableData from "./ticketPoolTableData";

export default function TicketPoolTable() {
    const [ ticket, setTicket ] = useState()
    const [showTable, setShowTable] = useState(true)

    useEffect(() => {
        console.log("table effect")
        findAll()
    }, [])

    async function findAll() {
        try{
            const response = await tickITProClient.get("/ticket")
            console.log(response.data)
            setTicket(response.data)            
        } catch (error){
            console.error(error)
        }
    }

    function renderTable(){
        showTable ? setShowTable(false) : setShowTable(true)
    }


    return (
        
        <>
            <button>Show Ticket Table</button>
            {showTable === true ? (
                <table sx={{ maxWidth: 1000 }} style={{ border: "black solid" }} align="center">
                <th>
                    <tr style={{ backgroundColor: "black" }}>
                        <td align="center"></td>
                        <td align="center">Email</td>
                        <td align="center">First Name</td>
                        <td align="center">Last Name</td>
                        <td align="center">IT Pro</td>
                        <td align="center">Priority</td>
                    </tr>
                </th>
                {/* useEffect is invoked AFTER this is rendered, causing the default to be undefined */}
                {ticket === undefined || <TicketPoolTable ticket={ticket}></TicketPoolTable>}
            </table>
            ) :(

                <p>table hidden</p>
            )}
            
</>
        // <div>
        //     <h1>Number of available tickets: {ticketNumber}</h1>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>Description</th>
        //                 <th>Priority</th>
        //                 <th>Subject</th>
        //                 <th>Status</th>
        //                 <th>Member Email</th>
        //             </tr>
        //         </thead>
        //         {/* useEffect is invoked AFTER this is rendered, causing the default to be undefined */}

        //         <TicketPoolTableData tickets={tickets}></TicketPoolTableData>
        //     </table>
        // </div>
    )
}