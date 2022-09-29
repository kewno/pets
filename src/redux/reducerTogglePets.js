import {createSlice} from "@reduxjs/toolkit";

const reducerTogglePetsSlice = createSlice({
    name: "reducerTogglePets",
    initialState: {
        active: []
    },
    reducers: {
        setTogglePets(state, action) {
            console.log(state.active.indexOf(action.payload) !== -1)
            if (state.active.indexOf(action.payload) === -1) {
                state.active.push(action.payload)
            } else {
                let index = state.active.indexOf(action.payload)
                state.active.splice(index, 1)
            }
            //state.active.push(action.payload)
            //alert(state)
            //debugger
            //reducerTogglePets
        }
    }
})

export default reducerTogglePetsSlice.reducer
export const {setTogglePets} = reducerTogglePetsSlice.actions