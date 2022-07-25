import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BookList } from "../components/BookList"
import { FilterSort } from "../components/Filtersort"
import { getbooks } from "../Redux/action"
import  styled from "styled-components"
import "./Book.css"
export const Books=()=> {
 const dispatch= useDispatch()
const books= useSelector((store)=> store.getreducer.books)
    useEffect(()=> {
        // if(books?.length===0){
        dispatch(getbooks())
        // }
    },[])
    
    return (
        <>
        <h2>Books</h2>
        <BooksPageWrapper>

        <BookListWrapper>

            <FilterSortWrapper>
        <FilterSort/>
        </FilterSortWrapper>

        <BookListWrapper>
        <BookList  />
        </BookListWrapper>
        
        </BookListWrapper>

        </BooksPageWrapper>
        </>
    )
}

const BooksPageWrapper= styled.div`
 display:flex;
`


const FilterSortWrapper= styled.div`
  width:400px;
  border:1px solid red;
`

const BookListWrapper= styled.div`
border: 1px  solid black;
width:100%;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(310px,max-content));
grid-gap:16px;
justify-content:center;
padding:initial;

`
