import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { ticketTableContext } from "../../App";
import addAuthToken from "../../common/remote/addAuthHeader";
import { tickITProClient } from "../../common/remote/tickitpro-client";


// export const ticketContext = createContext()

export default function TicketTable (){
    const proId = useSelector((state) => state.loginSlice.id);
    const [tickets] = useContext(ticketTableContext);
    const [formData,setFormData] = useState({
        id: "",
        proUserId: "",
        status: ""
    });

async function confirmTicket(t){
    
    try {
        addAuthToken();
        console.log(t);
        const tempForm = {...formData, id: t, proUserId: proId, status: 'CONFIRMED' }
        setFormData(tempForm);
        console.log(tempForm);
        const response = await tickITProClient.put("/ticket/secure", tempForm);
        console.log(response.data);
    } catch (error) {
        console.log(error.response.data);
    }
}
    let ticketArray = tickets.map((o) => {
            return (
                <tr key={o.ticketId}>
                    <td>{o.submissionDate}</td>
                    <td>{o.subjectId}</td>
                    <td>{o.description}</td>
                    <td>{o.priority}</td>
                    <td>{o.status}</td>
                    <td>{o.proId}</td>
                    <button onClick={() => confirmTicket(o.ticketId)}>Confirm</button>
                </tr>
              
            );
        });
        return <tbody>{ticketArray}</tbody>
    // //create a state where cards are set
    // //create a usestate for showing the table

    // const[tickets, setTickets] = useState()
    // const[showTable, setShowTable] = useState(true)

    // useEffect(() => {
    //     showTable && findAllByAltText();
    // }, [showTable]); //this will display the table //leaving for testing and review


    // async function findAll(){
    //     try {
    //         const response = await tickITProClient.get("/ticket")
    //         console.log(response.data)
    //         setTickets(response.data)
    //     } catch (error){
    //         console.error(error)
    //     }
    // }

    // function renderTable(){
    //     showTable ? setShowTable(false) : setShowTable (true)
    // }
    
    // return (
    //     <>
    //         <button onClick ={renderTable}>Show Ticket Table</button>
    //         {showTable === true ?(
    //             <div>
    //                 <table>
    //                     <thead>
    //                         <tr>
    //                             <th>Ticket ID</th>
    //                             <th>Description</th>
    //                             <th>Status</th>
    //                             <th>Priority</th>
    //                             <th>Assigned IT Pro</th>
    //                         </tr>
    //                     </thead>
    //                     {}                                                                        
    //                     <ticketContext.Provider value = {[tickets, setTickets]}>
    //                         {tickets === undefined || <TicketTableData></TicketTableData>} 
    //                     </ticketContext.Provider>                          
                    
    //                 </table>
    //             </div>
    //         ):(
    //             <p>Table Hidden</p> //whats this for?
    //         )}
    //     </>

    // )



}