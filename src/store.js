import {combineReducers,  legacy_creatStore,applyMiddleware} from "redux";
import { createStore } from "redux";
import { getreducer } from "./Redux/reducer";
 import thunk from "redux-thunk"
 import { loginreducer } from "./Reduxlogin/reducer"
  
const rootreducer = combineReducers({
     
    getreducer:getreducer,
    loginreducer:loginreducer
    
})
const store = createStore(rootreducer,applyMiddleware(thunk))
 


console.log("store",store.getState())

//getSatte is object here that have counter and todo

  export default store