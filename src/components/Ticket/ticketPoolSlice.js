import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ticketNumber: 0,
    tickets: []
};

const ticketPoolSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
        addTicketStore(state, action){
            state.tickets = [...state.tickets, action.payload];
            state.ticketNumber++;
        },
        removeTicket(state,action){
            const index = action.payload
            for(let i = 0; i < state.tickets.length; i++){
                if (i === index) state.tickets.splice(i,1)
            }
            state.ticketNumber--;
        },
        clearTickets(state){
            state.tickets =[]
            state.ticketNumber = 0
        }
    }
});

export default ticketPoolSlice.reducer

export const {addTicketStore, removeTicket, clearTickets} = ticketPoolSlice.actions