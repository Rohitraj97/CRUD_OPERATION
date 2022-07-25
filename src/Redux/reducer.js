import * as types from "./actionType"
const initialState={
    books:[],
    isloading:false,
    isError:false
}
 export const getreducer=(state=initialState,action)=>{
  const {type,payload}=action
    switch(action.type)
    {
       case types.GET_BOOKS_REQUEST:
        return {
            ...state,

            books:payload,
            isloading:true,
            isError:true
        }


        case types.GET_BOOKS_SUCCESS:
            return {
                ...state,
    
                books:payload,
                isloading:false,
                isError:false
            }

            case types.GET_BOOKS_FAILURE:
                return {
                    ...state,
        
                     
                    isloading:false,
                    isError:true
                }


                case types.EDIT_BOOKS_REQUEST:
                    return {
                        ...state,
            
                        books:payload,
                        isloading:true,
                        isError:true
                    }
            
            
                    case types.EDIT_BOOKS_SUCCESS:
                        return {
                            ...state,
                
                            books:[...state.books,payload],
                            isloading:false,
                            isError:false
                        }
            
                        case types.EDIT_BOOKS_FAILURE:
                            return {
                                ...state,
                    
                                 
                                isloading:false,
                                isError:true
                            }



                            case types.DELETE_BOOKS_REQUEST:
                                return {
                                    ...state,
                        
                                    books:payload,
                                    isloading:true,
                                    isError:true
                                }
                        
                        
                                case types.DELETE_BOOKS_SUCCESS:
                                    // const newList = initialState.book.filter((item) => item.action.payload !== action.payload);
                                    return {
                                        ...state,
                                       
                                        books:[...state.books,action],
                                        isloading:false,
                                        isError:false
                                    }
                        
                                    case types.DELETE_BOOKS_FAILURE:
                                        return {
                                            ...state,
                                
                                             
                                            isloading:false,
                                            isError:true
                                        }



                                        case types.POST_BOOKS_REQUEST:
                                            return {
                                                ...state,
                                    
                                                books:payload,
                                                isloading:true,
                                                isError:true
                                            }
                                    
                                    
                                            case types.POST_BOOKS_SUCCESS:
                                                // const newList = initialState.book.filter((item) => item.action.payload !== action.payload);
                                                return {
                                                    ...state,
                                                   
                                                    books:[...state.books,action.payload],
                                                    isloading:false,
                                                    isError:false
                                                }
                                    
                                                case types.POST_BOOKS_FAILURE:
                                                    return {
                                                        ...state,
                                            
                                                         
                                                        isloading:false,
                                                        isError:true
                                                    }
        default:return state
    }
 }