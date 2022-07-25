import { useEffect ,useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { getbooks } from "../Redux/action"
export const Singlebook=()=> {
    const {id}= useParams()
    const dispatch= useDispatch()
    const books= useSelector((state)=> state.getreducer.books)
    const [currentbooks,setCurrentbooks]= useState({})
    useEffect(()=> {
        if(books?.length===0)
        {
            dispatch(getbooks())
        }
    },[books?.length,dispatch])

    
    useEffect(()=> {
          if(id)
          {
            const temp=books?.find((book)=>book.id===Number(id));
            temp && setCurrentbooks(temp)
          }
    },[books,id])


   
    console.log("curr",currentbooks)
    return (
        <>
        <div>Single</div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNsTpCmioCqOzm4UcILEa4UwfjUA1VZKuhA&usqp=CAU" />
       <div> {currentbooks.book_name}</div>
      <div> {currentbooks.release_year}</div> 
        {currentbooks.image}
     <Link to= {`/books/${currentbooks.id}/edit`}  > <button>EDIT</button></Link> 
     <Link to= {`/books/${currentbooks.id}/delete`}  > <button>DELETE</button></Link> 
        </>
    )
}