import {createSlice} from "@reduxjs/toolkit";

const reducerPetsDetailSlice = createSlice({
    name: "reducerTogglePets",
    initialState: {
        active: 1
    },
    reducers: {
        setPetsDetail(state, action) {
            state.active =  action.payload
        }
    }
})

export default reducerPetsDetailSlice.reducer
export const {setPetsDetail} = reducerPetsDetailSlice.actions