// import { Singlebook } from "../Pages/SingleBook"
import { BookCard } from "./BookCard"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { getbooks } from "../Redux/action"
import { useLocation, useSearchParams } from "react-router-dom"
export const BookList=(s)=> {
    const books= useSelector((state)=> state.getreducer.books)
    const token= useSelector((state)=> state.loginreducer.token)
    
    const dispatch= useDispatch()
    const [searchParams]=useSearchParams()
    const location=useLocation()
    useEffect(()=> {
        if(books?.length===0)
        {
            dispatch(getbooks())
        }
    })

    useEffect(()=> {
        if(books?.length==0||location.search){
            const sortBy = searchParams.get('sortBy')
        let getBooksParams={
            params:{
                category:searchParams.getAll("category"),
                _sort:sortBy&&"release_year",
                _order:sortBy
            }
        }
        dispatch(getbooks(getBooksParams))
    }
    },[location.search])
    console.log(token)
return(
    <>
    BookList
    {books?.length > 0 && 
     books?.map((singleBook)=>{
        return(
             
           
         <BookCardWrapper key={singleBook.id}>
             
      <Link to={`/books/${singleBook.id}`}>     <BookCard bookData={singleBook}/></Link> 
            </BookCardWrapper>  
        )
        
    })}
  <div>{token.token}</div>
    </>
)
}



const BookCardWrapper= styled.div`
border: 1px  solid coral;
padding:5px;
width:310px;
 
`