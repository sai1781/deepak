import { createSlice } from '@reduxjs/toolkit'

const user_info = createSlice({
    name: "user_info",
    initialState: {
        username1: "",
        userpassword1: ""
        // image1: ""
    },
    reducers: {
        setvalue1: (initialState, action) => {
            initialState.username1 = action.payload
        },
        setvalue2: (initialState, action) => {
            initialState.userpassword1 = action.payload
        }
        // setvalue3: (initialState, action) => {
        //     initialState.image1 = action.payload
        // }

    }
})

export const{setvalue1} = user_info.actions
export const{setvalue2} = user_info.actions
// export const{setvalue3} = user_info.actions

export default user_info.reducer;


