const redux= require("redux")
const createStore = redux.createStore  
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware= require("redux-thunk").default
const axios = require("axios")

const INITIAL_STATE = {
    loading: false,
    users: [],
    error: ""
}

const ACTION_TYPES = {
    FETCH_USERS_REQUESTED: "FETCH_USERS_REQUESTED",
    FETCH_USERS_SUCCEEDED: "FETCH_USERS_SUCCEEDED",
    FETCH_USERS_FAILED: "FETCH_USERS_FAILED"
}

const fetchUsersRequested = ()=>{
    return{
    type: ACTION_TYPES.FETCH_USERS_REQUESTED,
    payload: true
    }
}

const fetchUsersSuccessful = (users)=>{
    return {
        type: ACTION_TYPES.FETCH_USERS_SUCCEEDED,
        payload: users
    }
}

const fetchUsersFailed = (error)=>{
    return {
        type: ACTION_TYPES.FETCH_USERS_FAILED,
        payload: error,
    }
}

const fetchUsersReducer = (state=INITIAL_STATE, action={})=>{
    const {type, payload} = action;
    switch(type){
        case ACTION_TYPES.FETCH_USERS_REQUESTED : 
            return {
                ...state,
                loading: payload
        }
        break;
        case ACTION_TYPES.FETCH_USERS_SUCCEEDED :
            return{
                error: "",
                loading: false,
                users: payload,
            }
        break;    
        case ACTION_TYPES.FETCH_USERS_FAILED :
            return {
                users: [],
                loading: false,
                error: payload,
            }
        break;   
        default :
        return state; 
    }
}

const store = createStore(fetchUsersReducer, applyMiddleware(thunkMiddleware))

const fetchUsers = ()=>{
    return function(dispatch){
        dispatch(fetchUsersRequested())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response =>{
            //response.date is the users
            const users= response.data.map((user)=>user.username)
            dispatch(fetchUsersSuccessful(users))
        }).catch(error =>{
            //error.message is error message 
            dispatch(fetchUsersFailed(error.message))
        })
    }
}

const unsubscribe = store.subscribe(()=>console.log(store.getState()))

store.dispatch(fetchUsers())

