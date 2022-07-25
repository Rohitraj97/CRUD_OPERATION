import { useSelector } from "react-redux"
import ReactRain from "react-rain-animation";
import "react-rain-animation/lib/style.css";
import ReactAudioPlayer from "react-audio-player";
export const BookCard=({bookData})=> {
   
    return (
        <>
        BookCard
        <div>
        {/* TOken:{token} */}
        <ReactRain numDrops="300" />

<ReactAudioPlayer
  src="https://www.youtube.com/watch?v=q76bMs-NwRk"
  autoPlay
  controls
/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNsTpCmioCqOzm4UcILEa4UwfjUA1VZKuhA&usqp=CAU" />
<div><h1>{bookData.book_name}</h1></div>
<div><h1>{bookData.author}</h1></div>
<div><h1>{bookData.book_name}</h1></div>
<div><h1>{bookData.no_of_chapters}</h1></div>
<div><h1>{bookData.category}</h1></div>
<div><h1>{bookData.release_year}</h1></div>


        </div>
        </>
    )
}