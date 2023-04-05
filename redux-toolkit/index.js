const store = require("./app/store")
const cakeActions = require("./features/cake/cakeSlice").cakeAction
const iceCreamActions = require("./features/icecream/icecreamSlice").iceCreamAction
console.log("Initial State", store.getState())

const unsubscribe = store.subscribe(()=>{});

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(cakeActions.restocked(2))
store.dispatch(iceCreamActions.restocked(3))

console.log("Final State", store.getState())
unsubscribe();
