const redux = require("redux")
const createStore = redux.createStore;

const INITIAL_STATE = {
    name: "Suyash",
    address:{
        street: '123 Main St', 
        city: "Boston",
        state: "MA"
    }
}

const ACTION_TYPES = {
    CHANGE_STREET: "CHANGE_STREET" 
}

const changeStreet = (street)=>{
    return{
    type: ACTION_TYPES.CHANGE_STREET,
    payload: street,
    }
}

const changeStreetReducer = (state= INITIAL_STATE, action={})=>{
    const {type, payload} = action;
    switch(type){
        case ACTION_TYPES.CHANGE_STREET :
            return {
                ...state,
                address: {
                    ...state.address,
                    street: payload
                }
            } 
            break;
        default:
            return state;
    }
}

const store = createStore(changeStreetReducer)


console.log("Initial State" , store.getState())
const unsubscribe = store.subscribe(()=>console.log("Updated State" , store.getState()))

store.dispatch(changeStreet("4323 dadaaasggd"))

unsubscribe();