import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: false,
    email: "Not login",
    id: null,
    
}

const loginSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        loginStore(state, action){
            const {email, admin, id} = action.payload;
            console.log(email, admin, id);
            state.email = email;
            state.admin = admin;
            state.id = id;

            console.log(state);

        }
    },
});

export default loginSlice.reducer;

export const {loginStore} = loginSlice.actions;