import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { postbooks } from "../Redux/action"

export const Post=()=> {
    const dispatch= useDispatch()
    const [author,setauthor] = useState("")
    const [bookname,setbookname]= useState("")
    const [category,setcategory] = useState("")
    const [year,setrelease_year]= useState("")
    const [chapter,setno_of_chapters]= useState(0)

    // useEffect(()=> {
    //   dispatch(postbooks())
    // },[])

    const handlepost=(e)=> {
       e.preventDefault()
       dispatch(postbooks({author:author,book_name:bookname,category:category,release_year:year,no_of_chapters:chapter}))
    }
    return (
        <>
        POST
        <form onSubmit={handlepost}>
        <div>
                    <label>Author</label>
                    <input type="author" onChange={(e) => setauthor(e.target.value)} />
                </div>

                <div>
                    <label>BookName</label>
                    <input type="author" onChange={(e) => setbookname(e.target.value)} />
                </div>

                <div>
                    <label>Category</label>
                    <input type="author" onChange={(e) => setcategory(e.target.value)} />
                </div>

                <div>
                    <label>Release-Year</label>
                    <input type="author" onChange={(e) => setrelease_year(e.target.value)} />
                </div>

                <div>
                    <label>No of Chapters</label>
                    <input type="author" onChange={(e) => setno_of_chapters(e.target.value)} />
                </div>
                <button type="submit">POST</button>
                </form>
        </>
    )
}


// "author": "Masai",
// "no_of_chapters": 6,
// "cover_photo": "",
// "book_name": "Full-Stack Web Development",
// "category": "Science_Fiction",
// "release_year": 2015,