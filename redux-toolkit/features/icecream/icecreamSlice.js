const createSlice = require("@reduxjs/toolkit").createSlice
const {cakeActions} = require("../cake/cakeSlice")


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
    }
})

module.exports = icecreamSlice.reducer
module.exports.iceCreamAction = icecreamSlice.actions