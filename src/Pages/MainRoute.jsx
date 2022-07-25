import { Route,Routes } from "react-router-dom"
import { Books } from "./Books"
import { Edit } from "./Editbook"
import { Singlebook } from "./SingleBook"
 import { Admin, Login } from "./Admin"
import { RequireAuth } from "../components/RequireAuth"
import { Delete } from "./Delete"
import { Post } from "./Post"

export const MainRoute=()=> {
    return (
        <Routes>
            <Route path="/" element={<Books/>}></Route>
            <Route path="/post" element={<Post/>}></Route>
            <Route path="/books/:id" element= {<Singlebook/>}/>
            <Route path="/books/:id/delete" element= {<Delete/>}/>
            <Route path="/books/:id/edit" element={<RequireAuth>
                <Edit/>   ///children
                </RequireAuth>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<h1>Page not found</h1>}/>
        </Routes>
    )
}

