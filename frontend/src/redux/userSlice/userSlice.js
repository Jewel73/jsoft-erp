import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userInfo: {
        name: "",
        email: "jewel@gmail.com"
    },
    pending: false,
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser:(state, action)=>{
            console.log(action.payload)
            state.userInfo = action.payload;
        },

        removeUser: (state)=>{
            
            state.userInfo.userInfo = {};
        }
    }
})


export const {addUser, removeUser} = userSlice.actions;
export default  userSlice.reducer;