import { useState } from "react"
import { tickITProClient } from "../../common/remote/tickitpro-client"

export default function DeleteTicket(props){
    const ticketId = props.id

    const[deleted, setDeleted] = useState()

    async function deleteCard(){
        try{
            addAuthToken()
            await tickITProClient.delete('/ticket/${ticketId}')
        } catch(error){
            setDeleted('Failed to delete ${ticketId} with ${error.response.data}')
        }
    }

    return (

        <>
            <button onClick = {deleteTicket}>Delete</button>
            {deleted === undefined ? <></> : <span>{deleted}</span>}
        </>
    )
}