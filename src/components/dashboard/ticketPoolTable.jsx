import { createContext } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import TicketPoolTableData from "./ticketPoolTableData";

export const ticketContext = createContext();

export default function TicketPoolTable() {
    const id = useSelector((state) => state.loginSlice.id);
    const [tickets, setTickets] = useState();
    const [showTable, setShowTable] = useState(true);

    useEffect(() => {
        console.log("table effect used");
        findAll();
    }, [])

    async function findAll() {
        try{
            addAuthToken();
            const response = await tickITProClient.get(`/ticket/requser/${id}`);
            console.log(response.data);
            setTickets(response.data);
            console.log(tickets);
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
                    <tr>
                        <th>
                            <td align="center"></td>
                            <td align="center">Email</td>
                            <td align="center">First Name</td>
                            <td align="center">Last Name</td>
                            <td align="center">IT Pro</td>
                            <td align="center">Priority</td>
                        </th>
                    </tr>
                    {/* useEffect is invoked AFTER this is rendered, causing the default to be undefined */}
                    <ticketContext.Provider value={[tickets,setTickets]}>
                        {ticket === undefined || <TicketPoolTableData></TicketPoolTableData>}
                    </ticketContext.Provider>
                </table>
            ) : (

                <p>table hidden</p>
            )}
        </>
    )
}