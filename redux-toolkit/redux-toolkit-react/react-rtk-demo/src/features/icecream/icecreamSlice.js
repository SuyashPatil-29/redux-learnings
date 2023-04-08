import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
    noOfIceCreams: 20,
}

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: (state) =>{
            state.noOfIceCreams--;
        },
        restocked: (state, action)=>{
            state.noOfIceCreams+= action.payload
        } 
    },
    extraReducers: (builder)=>{
        builder.addCase(cakeOrdered, (state)=>{
            state.noOfIceCreams--
        })
    }
})

export default icecreamSlice.reducer
export const {ordered, restocked} = icecreamSlice.actions