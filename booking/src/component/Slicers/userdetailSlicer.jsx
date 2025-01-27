import { createSlice } from "@reduxjs/toolkit";

const initialState=null

const userdetailSlicer=createSlice(
    {
        name:"userdetail",
        initialState:initialState,
        reducers:
        {
            adduserdetail(state,action){
            return action.payload
            }
        }
    }
)

export default userdetailSlicer.reducer
export const {adduserdetail}=userdetailSlicer.actions