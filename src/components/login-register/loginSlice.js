import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: false,
    itpro: false,
    email: "anon",
    id: null,
    
}

const loginSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        loginStore(state, action){
            const {email, admin, itpro, id} = action.payload;
            console.log(email, admin, itpro, id);
            state.email = email;
            state.admin = admin;
            state.itpro = itpro;
            state.id = id;

            console.log(state);
        },
        logoutStore(state){
            state.email = initialState.email;
            state.admin = initialState.admin;
            state.itpro = initialState.itpro;
            state.id = 1;

            console.log(state);
        },
    },
});

export default loginSlice.reducer;

export const {loginStore, logoutStore} = loginSlice.actions;