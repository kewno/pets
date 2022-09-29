import {createSlice} from "@reduxjs/toolkit";

const reducerUserSlice = createSlice({
    name: "reducerUser",
    initialState: {
        userData: {
            image: 'avatar.png',
            name: 'Andrey Shiabov'
        },
        likes: [
            {id: 1, status: true, coll: 123},
            {id: 2, status: true, coll: 143},
            {id: 3, status: false, coll: 133},
            {id: 4, status: false, coll: 13},
            {id: 5, status: true, coll: 167}
        ]
    },
    reducers: {
        toggleLike(state, action) {
            //let activeElem = state.likes.filter(el => el)
            //console.log(state.likes) //.id === action.payload

            // переписать на thunk для api
            state.likes.forEach((el) => {
                if (el.id === action.payload) {
                    if (el.status) {
                        --el.coll
                    } else {
                        ++el.coll
                    }
                    el.status = !el.status

                }
            })
            //debugger
            //console.log(state.likes)//debugger
            //activeElem
        }
    }
})

export default reducerUserSlice.reducer
export const {toggleLike} = reducerUserSlice.actions