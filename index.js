const redux = require('redux')
const createStore = redux.createStore

//Actions
const ACTION_TYPES ={
  CAKE_ORDERED : "CAKE_ORDERED",
  CAKE_RESTACKED: "CAKE_RESTACKED",
  ICECREAM_ORDERED: "ICECREAM_ORDERED"
}

const orderIcecream = (quantity=1)=>{
    return{
        type: ACTION_TYPES.ICECREAM_ORDERED,
        payload: quantity,
    }
}

const orderCake=()=>{
    return {
    type: ACTION_TYPES.CAKE_ORDERED,
    payload: 1,
} 
}

const restackCake = ()=>{
    return{
    type: ACTION_TYPES.CAKE_RESTACKED
    }
}

//Initial State

const INITIAL_STATE = {
    noOfCakes : 10,
    noOfIceCreams: 10,
}


//Reducers 

// (previousState, action) => newState



const cakeReducer = (state = INITIAL_STATE, action = {})=>{
    const {type, payload} = action;
    switch(type){
       case ACTION_TYPES.CAKE_ORDERED :
        return{ 
            ...state,
            noOfCakes : state.noOfCakes-1 }; 
        break;
        case ACTION_TYPES.CAKE_RESTACKED :
            return{ 
                ...state,
                noOfCakes : state.noOfCakes+1 }; 
        break;
        case ACTION_TYPES.ICECREAM_ORDERED :
            return {
                ...state,
                noOfIceCreams: state.noOfIceCreams-payload
            }        
       default :
       return state;
    }
}

//Creating Store

const store = createStore(cakeReducer)

console.log("Initial State" , store.getState())

const unsubscribe = store.subscribe(()=>console.log("updated state ", store.getState()))


store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restackCake())
store.dispatch(restackCake())
store.dispatch(orderIcecream(1))
store.dispatch(orderIcecream(2))
store.dispatch(orderIcecream(3))

console.log("Final State" , store.getState())

unsubscribe()
