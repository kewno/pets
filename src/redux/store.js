import {combineReducers, configureStore} from "@reduxjs/toolkit";
import reducerSlice from './reducer'


const reducers = combineReducers({
    reducer: reducerSlice
})

export const store = configureStore( {
    reducer: reducers
})