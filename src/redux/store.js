import {combineReducers, configureStore} from "@reduxjs/toolkit";
import reducerSlice from './reducer'
import reducerTogglePets from "./reducerTogglePets";
import reducerPetsDetail from "./reducerPetsDetail";
import reducerUser from "./reducerUser";

const reducers = combineReducers({
    reducer: reducerSlice,
    reducerTogglePets: reducerTogglePets,
    reducerPetsDetail: reducerPetsDetail,
    reducerUser: reducerUser
})

export const store = configureStore( {
    reducer: reducers,
    reducerTogglePets: reducerTogglePets,
    reducerPetsDetail: reducerPetsDetail,
    reducerUser: reducerUser
})