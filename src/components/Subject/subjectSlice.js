import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subjectNumber: 0,
    subjects: []
};

const subjectSlice = createSlice({
    name: "subject",
    initialState,
    reducers: {
        addSubjectStore(state,action) {
            state.subjects = [...state.subjects,action.payload];
            state.subjectNumber++;
        },
        removeSubject(state,action) {
            const index = action.payload;
            for(let i = 0; i < state.subjects.length; i++){
                if (i === index) state.subjects.splice(i,1);
            }
            state.subjectNumber--;
        },
        clearSubjects(state){
            state.subjects =[];
            state.subjectNumber = 0;
        }
    }
});

export default subjectSlice.reducer;

export const {addSubjectStore,removeSubject,clearSubjects} = subjectSlice.actions;