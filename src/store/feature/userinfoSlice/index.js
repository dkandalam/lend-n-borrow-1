import {createSlice,PayloadAction} from "@reduxjs/toolkit";

const initialState = {};
const userInfoSlice = createSlice({
    name:'userinfo',
    initialState,
    reducers:{
        setUserInfo:(state,payloadAction)=>{
            state.userInfo = payloadAction.payload;
        }
    }
});

export const {setUserInfo} = userInfoSlice.actions;
export default userInfoSlice.reducer;