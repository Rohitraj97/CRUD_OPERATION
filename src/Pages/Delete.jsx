import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { deletebooks } from "../Redux/action"
import { editbooks } from "../Redux/action"
import { useDispatch, useSelector } from "react-redux"
export const Delete=()=> {
    const dispatch= useDispatch()
    const [currentbooks, setCurrentbooks] = useState({})
    const { id } = useParams()
    const books = useSelector((state) => state.getreducer.books)
     

    useEffect(() => {
        if (id) {
            const temp = books?.find((book) => book.id === Number(id));
            temp && setCurrentbooks(temp)
        }
    }, [books, id])
    console.log("current b",currentbooks)
    
    useEffect(()=> {
        dispatch(deletebooks(currentbooks,id))
        alert("Item deleted successfully")
    },[])
    console.log("current",currentbooks)
    return (
        
        <>
        <div>Delete</div>
        </>
    )
}