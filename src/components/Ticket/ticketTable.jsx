import { useEffect, createContext, useState } from "react"
import { tickITProClient } from "../../common/remote/tickitpro-client"
import TicketTableData from "./ticketTableData"

export const ticketContext = createContext()

export default function TicketTable (){
    //create a state where cards are set
    //create a usestate for showing the table

    const[tickets, setTickets] = useState()
    const[showTable, setShowTable] = useState(true)

    useEffect(() => {
        showTable && findAllByAltText();
    }, [showTable]); //this will display the table //leaving for testing and review


    async function findAll(){
        try {
            const response = await tickITProClient.get("/ticket")
            console.log(response.data)
            setTickets(response.data)
        } catch (error){
            console.error(error)
        }
    }

    function renderTable(){
        showTable ? setShowTable(false) : setShowTable (true)
    }
    
    return (
        <>
            <button onClick ={renderTable}>Show Ticket Table</button>
            {showTable === true ?(
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Ticket ID</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Priority</th>
                                <th>Assigned IT Pro</th>
                            </tr>
                        </thead>
                        {}                                                                        
                        <ticketContext.Provider value = {[tickets, setTickets]}>
                            {tickets === undefined || <TicketTableData></TicketTableData>} 
                        </ticketContext.Provider>                          
                    
                    </table>
                </div>
            ):(
                <p>Table Hidden</p> //whats this for?
            )}
        </>

    )

}