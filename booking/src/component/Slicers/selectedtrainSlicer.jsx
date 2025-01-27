import { createSlice } from "@reduxjs/toolkit";

const initialstate=null

const selectedtrain=createSlice(
    {
        name:"selectedtrain",
        initialState:initialstate,
        reducers:{
            selectetrain(state,action){
                return action.payload
            }
        }
    }
)

export default selectedtrain.reducer;
export const {selectetrain} = selectedtrain.actions