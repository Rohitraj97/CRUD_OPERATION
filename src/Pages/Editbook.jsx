import { useState, useEffect } from "react"
import { Navigate, useParams } from "react-router-dom"

import { editbooks } from "../Redux/action"
import { useDispatch, useSelector } from "react-redux"
export const Edit = () => {
    const dispatch = useDispatch()
    const [author, setauthor] = useState("")
    const [category, setcategory] = useState("")
    const [currentbooks, setCurrentbooks] = useState({})
    const { id } = useParams()
    const books = useSelector((state) => state.getreducer.books)
     

    useEffect(() => {
        if (id) {
            const temp = books?.find((book) => book.id === Number(id));
            temp && setCurrentbooks(temp)
        }
    }, [books, id])
 
    const handlesubmit = (e) => {
        e.preventDefault()
        currentbooks.author = author
        let Auth = currentbooks.author
        if(category=="Novel"||"Motivational"||"Science_Fiction"||"Thriller"){
        currentbooks.category = category
        var Cat = currentbooks.category
        }
        
        
        dispatch(editbooks({ Auth, Cat, id }))
        alert("patch success")
        console.log("l")
        return <Navigate to="/" />
    }
    
    return (
        <>
            Only Authorized to Administrator
            {/* EDIT */}
            <form onSubmit={handlesubmit}>
                <div>
                    <label>Author</label>
                    <input type="author" onChange={(e) => setauthor(e.target.value)} />
                </div>

                <div>
                    <label>Category</label>
                    <input type="category" onChange={(e) => setcategory(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}