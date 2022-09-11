import { useContext } from "react";
import { createContext } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import addAuthToken from "../../common/remote/addAuthHeader";
import { tickITProClient } from "../../common/remote/tickitpro-client";
import TicketPoolTableData from "./ticketPoolTableData";
import { dashboardRenderContext } from "./userDashboard";

export const ticketContext = createContext();

export default function TicketPoolTable() {
    const id = useSelector((state) => state.loginSlice.id);
    const [tickets, setTickets] = useState();
    const [creation] = useContext(dashboardRenderContext);
    const [showTable, setShowTable] = useState(true);

    useEffect(() => {
        console.log("table effect used");
        findAll();
    }, [creation,showTable]);

    async function findAll() {
        try{
            addAuthToken();
            const response = await tickITProClient.get(`/ticket/requser/${id}`);
            console.log(response.data);
            setTickets(response.data);
            console.log(tickets);
        } catch (error){
            console.error(error);
        }
    }

    function renderTable(){
        showTable ? setShowTable(false) : setShowTable(true)
    }


    return (
        
        <>
            <button className="tableButton" onClick={renderTable}>Show Ticket Table</button>
            {showTable === true ? (
                <table align="center">
                    <thead>
                        <tr>
                            <th align="center">Submission Date</th>
                            <th align="center">Subject</th>
                            <th align="center">Description</th>
                            <th align="center">Priority</th>
                            <th align="center">Status</th>
                            <th align="center">ITPro ID</th>
                        </tr>
                    </thead>
                    {/* useEffect is invoked AFTER this is rendered, causing the default to be undefined */}
                    <ticketContext.Provider value={[tickets,setTickets]}>
                        {tickets === undefined || <TicketPoolTableData />}
                    </ticketContext.Provider>
                </table>
            ) : (
                <p>table hidden</p>
            )}
        </>
    )
}