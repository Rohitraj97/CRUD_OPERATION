import { useEffect, useState } from "react"
import {useSearchParams} from "react-router-dom"
import { useDispatch } from "react-redux"
import { getbooks } from "../Redux/action"
export const FilterSort=()=> {
    const [searchParams,setSearchParams]= useSearchParams()
    const urlCategory=searchParams.getAll("category")
    const urlSort =searchParams.get("sortBy")
    const [category,setcategory]= useState(urlCategory||[])
//    const  dispatch=useDispatch()
const dispatch= useDispatch()
   
      const [sortBy,setSortBy] = useState(urlSort||"")
      console.log(urlCategory)
    const handleCheckbox=(e)=> {
        const option=e.target.value
        //if the option is already present then remove it and else add it
        let newCategory=[...category];
        if(category.includes(option))
        {
            //remove it
            newCategory.splice(newCategory.indexOf(option),1)
        }

        else{
            newCategory.push(option)
        }
        setcategory(newCategory)
    }
    // console.log(searParams)

    useEffect(()=> {
        if(category) {
            setSearchParams({category})
            // dispatch(getbooks({params:{category}}))
        }
    },[category,dispatch,setSearchParams])


    const handlesort=(e)=> {
        setSortBy(e.target.value)
    }
    console.log("sort",sortBy)

    useEffect(()=> {
        if(sortBy)
        {
            let params = {
                category: searchParams.getAll("category"),
                sortBy:sortBy
            }
           

          
             setSearchParams(params)
            //  dispatch(getbooks(getBooksParams))
        }
    },[setSearchParams,searchParams,dispatch,sortBy])

   
     
    return (
        <>
        <div>
     <h3>FilterSort</h3> 
     <div>
        <div>
            <input type="checkbox"  value="Novel"  defaultChecked={category.includes("Novel")} 
            onChange={handleCheckbox}
            />
            <label>Novel</label>
        </div>

        <div>
            <input type="checkbox" value="Motivational"  defaultChecked={category.includes("Motivational")}
            onChange={handleCheckbox}
            />
            <label>Motivational</label>
        </div>


        <div>
            <input type="checkbox" value="Science_Fiction"  defaultChecked={category.includes("Science_Fiction")} 
            onChange={handleCheckbox}
            />
            <label>Science_Fiction</label>
        </div>

        <div>
            <input type="checkbox" value="Thriller"  defaultChecked={category.includes("Thriller")} 
            onChange={handleCheckbox}
            />
            <label>Thriller</label>
        </div>
        </div>  
        <h3>Sort</h3>
        <div onChange={handlesort}>
            <input type="radio" value="asc" name="sortBy" defaultChecked={sortBy==="asc"}/>Ascending
            <input type="radio" value="desc" name="sortBy" defaultChecked={sortBy==="desc"}/>Descending

        </div>
        </div>
        </>
    )
}