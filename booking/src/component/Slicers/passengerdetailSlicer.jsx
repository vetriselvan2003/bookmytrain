import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

const passengerDetails=createSlice(
    {
        name:'passengersdetail',
        initialState:initialState,
        reducers:{
            addpassengers(state,action){
                return action.payload
            }
        }
    }
)

export default passengerDetails.reducer

export const {addpassengers} =passengerDetails.actions