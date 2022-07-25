
//to verify if the user is authenticated if yes let him go the expected component

import { useSelector } from "react-redux"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
//else redirect to logi n page
export const RequireAuth=({children})=> {
   
    const location= useLocation()
    const isAuth=useSelector((state)=> state.loginreducer.isAuth)
   
    if(!isAuth)
    {
        
       return <Navigate to= "/login" state={{from:location}} replace/>
        
        console.log("rohit")
    }
    console.log("isAuth",isAuth)
    return children
   
}