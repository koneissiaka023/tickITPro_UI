import { useDispatch } from "react-redux"
import { addTicketStore } from "./ticketPoolSlice"

export default function AddTicketToPool(props){
    const ticket = props.ticket

    const dispatch = useDispatch()

    function addToPool(){
        dispatch(addTicketStore(ticket));
    }
    return <button onclick = {addToPool}>Add ticket to the Pool</button>
}