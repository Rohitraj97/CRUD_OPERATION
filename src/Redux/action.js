import * as types from "./actionType"
import axios from "axios"


const getbooks=(params)=>(dispatch)=>  {

   dispatch({type:types.GET_BOOKS_REQUEST})

   axios.get("http://localhost:8080/books",params)
   
   .then((r)=> dispatch({type:types.GET_BOOKS_SUCCESS,payload:r.data}))
   .catch((e)=>dispatch({type:types.GET_BOOKS_FAILURE}))
}



const editbooks=({Auth,Cat,id})=>(dispatch)=>  {
   dispatch({type:types.EDIT_BOOKS_REQUEST})
   axios.patch(`http://localhost:8080/books/${id}`,{author:Auth,category:Cat})
  
   .then((r)=> dispatch({type:types.EDIT_BOOKS_SUCCESS,payload:r.data}, console.log(r.data)))
   .catch((e)=>dispatch({type:types.EDIT_BOOKS_FAILURE}))
}



const deletebooks=(currentbooks,id)=>(dispatch)=>  {
   dispatch({type:types.DELETE_BOOKS_REQUEST})
   axios.delete(`http://localhost:8080/books/${id}`,currentbooks )
  
   .then((r)=> dispatch({type:types.DELETE_BOOKS_SUCCESS,payload:r.data}, console.log("d",r.data)))
   .catch((e)=>dispatch({type:types.DELETE_BOOKS_FAILURE}))
}




const postbooks=({author:author,book_name:bookname,category:category,release_year:year,no_of_chapters:chapter})=>(dispatch)=>  {
   dispatch({type:types.POST_BOOKS_REQUEST})
   axios.post("http://localhost:8080/books/",
   {author:author,
      book_name:bookname,
      category:category,
      release_year:year,
      no_of_chapters:chapter}
   )
  
   .then((r)=> dispatch({type:types.POST_BOOKS_SUCCESS,payload:r.data}, console.log("d",r.data)))
   .catch((e)=>dispatch({type:types.POST_BOOKS_FAILURE}))
}
export { getbooks,editbooks ,deletebooks,postbooks}