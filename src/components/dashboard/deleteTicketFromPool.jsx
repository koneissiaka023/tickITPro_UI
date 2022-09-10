import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTicket } from "./ticketPoolSlice";

export default function DeleteTicketFromPool(props) {
    const ticketId = props.id;
    const [deleted, setDeleted] = useState();
    const dispatch = useDispatch();

    function deleteTicket() {
        dispatch(removeTicket(ticketId));
        setDeleted(`Successfully Deleted ticket ID # ${ticketId} from pool`);
    }

    return (
        <>
            <button onClick={deleteTicket}>Delete</button>
            {deleted === undefined ? <></> : <span>{deleted}</span>}
        </>
    );
}
