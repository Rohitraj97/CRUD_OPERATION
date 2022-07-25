import * as types from "./actionTypes"
const initialState={
     isAuth:false,
     token:'',
    isloading:false,
    isError:false
}
 export const loginreducer=(state=initialState,action)=>{
  const {type,payload}=action
    switch(action.type)
    {
       case types.USER_LOGIN_REQUEST:
        return {
            ...state,

            
            isloading:true,
            isError:true
        }


        case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
    
                // books:payload,
                isloading:false,
                isError:false,
                isAuth:true,
                token:payload
                
            }

            case types.USER_LOGIN_FAILURE:
                return {
                    ...state,
        
                     
                    isloading:false,
                    isError:true,
                    isAuth:false,
                    token:'',
                }
        default:return state
    }
 }