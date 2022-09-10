import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    departmentNumber: 0,
    departments: []
};

const departmentSlice = createSlice({
    name: "department",
    initialState,
    reducers: {
        addDepartmentStore(state, action) {
            state.departments = [...state.departments, action.payload];
            state.departmentNumber++;
        },
        removeDepartment(state, action) {
            const index = action.payload;
            for (let i = 0; i < state.departments.length; i++) {
                if (i === index) state.departments.splice(i, 1);
            }
            state.departmentNumber--;
        },
        clearDepartments(state) {
            state.departments = [];
            state.departmentNumber = 0;
        },
    },
});

export default departmentSlice.reducer;

export const { addDepartmentStore, removeDepartment, clearDepartments } = departmentSlice.actions;