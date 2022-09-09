import {createSlice} from "@reduxjs/toolkit";

const reducerSlice = createSlice({
    name: "reducer",
    initialState: {
        theme: 'dark'
    },
    reducers: {
        setTheme(state, action) {
            //state.theme = action.payload
            document.documentElement.setAttribute('data-theme', action.payload)
        }
    }
})

export default reducerSlice.reducer
export const {setTheme} = reducerSlice.actions

// const initReducer = {
//
// }
//
// const inc = createAction('inc')
//
// export default createReducer(initReducer, {
//     [inc]: function (state) {
//
//     }
// })