import { stat } from "fs"
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    ticketNumber: 0,
    tickets: []
}

const ticketPoolSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addTicketStore(state, action) {
            state.tickets = [...state.tickets, action.payload]
        },
        removeTicket(state, action){
            const index = action.payload
            for(let i = 0; i < state.tickets.length; i ++){
                if (i === index) state.tickets.splice(i, 1) 
            }
            state.ticketNumber--;
        }
    }
})

export default ticketPoolSlice.reducer

export const {addTicketStore, removeTicket, sendTicket} = ticketPoolSlice.actions