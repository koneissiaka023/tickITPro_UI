import { useDispatch } from "react-redux"
import { addTicketStore } from "./ticketPoolSlice"

export default function AddTicketToPool(props){
    const ticket = props.ticket

    const dispatch = useDispatch()

    function addToPool(){
        dispatch(addTicketStore(ticket))
        toast.success("Card successfully added")
    }

    return (
        <button  onClick = {addToPool}>Add Ticket To Pool</button>
    )
}