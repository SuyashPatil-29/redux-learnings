const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const bindActionCreator = redux.bindActionCreators

//Actions
const ACTION_TYPES ={
  CAKE_ORDERED : "CAKE_ORDERED",
  CAKE_RESTACKED: "CAKE_RESTACKED",
  ICECREAM_ORDERED: "ICECREAM_ORDERED",
  ICECREAM_RESTACKED: "ICECREAM_RESTACKED",
}


const orderCake=()=>{
    return {
        type: ACTION_TYPES.CAKE_ORDERED,
        payload: 1,
    } 
}

const restackCake = (quantity=1)=>{
    return{
        type: ACTION_TYPES.CAKE_RESTACKED,
        payload: quantity,
    }
}

const orderIcecream = (quantity=1)=>{
    return{
        type: ACTION_TYPES.ICECREAM_ORDERED,
        payload: quantity,
    }
}

const restackIceCream = (quantity=1)=>{
    return{
        type: ACTION_TYPES.ICECREAM_RESTACKED,
        payload: quantity,
    }
}
//Initial State

const INITIAL_CAKE_STATE = {
    noOfCakes : 10,
}
const INITIAL_ICECREAM_STATE = {
    noOfIceCreams: 10,
}

//Reducers 

// (previousState, action) => newState



const cakeReducer = (state = INITIAL_CAKE_STATE, action = {})=>{
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
                noOfCakes : state.noOfCakes+action.payload }; 
        break;
       default :
       return state;
    }
}

const iceCreamReducer = (state = INITIAL_ICECREAM_STATE, action = {})=>{
    const {type, payload}= action;
    switch(type){
        case ACTION_TYPES.ICECREAM_ORDERED :
            return {
                ...state,
                noOfIceCreams : state.noOfIceCreams-payload
            }
        break;    
        case ACTION_TYPES.ICECREAM_RESTACKED :
            return{ 
                ...state,
                noOfIceCreams : state.noOfIceCreams+ payload }; 
        break;
        default :
           return state;
    }
}

//Creating Store

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream : iceCreamReducer
})
const store = createStore(rootReducer)

console.log("Initial State" , store.getState())

const unsubscribe = store.subscribe(()=>console.log("updated state ", store.getState()))

const actions = bindActionCreator({orderCake, orderIcecream, restackCake, restackIceCream} , store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restackCake(2)
actions.orderIcecream(6)
actions.orderIcecream(2)
actions.restackIceCream(5)


console.log("Final State" , store.getState())

unsubscribe()
