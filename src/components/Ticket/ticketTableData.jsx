// import { useContext } from "react"
// import DeleteTicket from "./deleteTicket"
// import { ticketContext } from "./ticketTable"

// export default function TicketTableData(){
//     const email = useSelector((state) => state.loginSlice.email)
//     const [cards] = useContext(ticketContext)
//     const ticketArray = tickets
//         .filter((t) => t.userEmail === email && t)
//         .map((t) => {
//             return(
//                 <tr key = {t.ticketId}>
//                     <td>{t.description}</td>
//                     <td>{t.status}</td>
//                     <td>{t.priority}</td>
//                     <td>{t.itPro}</td>
//                     <AddTicketToPool ticket = {{description: t.description, status: t.status, priority: t.priority, itPro: t.itPro}}></AddTicketToPool>
//                     <DeleteTicket id ={t.ticketId}/>
//                 </tr>
//             )
//         })
//     return <tbody>{ticketArray}</tbody>
//     return <option value={departmentArray}>{departmentArray}</option>
// }   