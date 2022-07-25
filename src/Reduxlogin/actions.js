import * as types from "./actionTypes"
import axios from "axios"



const login=(payload)=>(dispatch)=>  {
    dispatch({type:types.USER_LOGIN_REQUEST})
   return axios({
        method:"post",
        url:"https://reqres.in/api/login",
   data:payload
})
    .then((r)=> dispatch({type:types.USER_LOGIN_SUCCESS,payload:r.data}))
   
    .catch((e)=>dispatch({type:types.USER_LOGIN_FAILURE}))
 }
 
 export { login }