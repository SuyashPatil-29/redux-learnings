const store = require("./app/store")
const cakeActions = require("./features/cake/cakeSlice").cakeAction
const iceCreamActions = require("./features/icecream/icecreamSlice").iceCreamAction
const fetchUsers = require("./features/user/userSlice").fetchUsers
// const unsubscribe = store.subscribe(()=>{});

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(cakeActions.restocked(2))
// store.dispatch(iceCreamActions.restocked(3))

// unsubscribe();
