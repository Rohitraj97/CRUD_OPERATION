import { useState } from "react"
import styled from "styled-components"
import {useDispatch} from "react-redux"
import { login } from "../Reduxlogin/actions"
 import {useLocation, useNavigate} from "react-router-dom"
export const Login=()=> {
    const [email,setEmail]= useState()
     const navigate=useNavigate(

     )
     const location = useLocation()
     const comingFrom = location.state?.from?.pathname||"/"
    const dispatch=useDispatch()
    const [password,setPassword] = useState("")
    const handleSUbmit=(e)=> {
        e.preventDefault()
        if(email && password)
        {
            dispatch(login({email,password})).then((r)=> {
                if(r.type==="USER_LOGIN_SUCCESS")
                {
                   navigate(comingFrom,{replace:true})
                }
            })
        }
    }
    return (
        <>
        <h1>login</h1>
  <div>eve.holt@reqres.in</div>
  <div>cityslicka</div>
        <form onSubmit={handleSUbmit}>
            <div>
                <label>User Email</label>
                <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
            </div>


            <div>
                <label>User Password</label>
                <input text="password" onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <button type="submit">submit</button>
        </form>
        </>
    )
}