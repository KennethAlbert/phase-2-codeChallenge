import React,{useState} from "react";
import {BsSuitHeartFill } from "react-icons/bs";


function Poem({poem,handleDelete,addFovirites,removeFavorites}) {
  const [mark,setMark]=useState(false);
  const[heart,setHeart]=useState(false)
 

const buttonStyles={
  marginLeft:"12px",
  borderRadius:"15px",
  backgroundColor:"red",
  border:"none"
}
function handleHeart() {
  setHeart(!heart);
 if(!heart){
  addFovirites(poem.id)
 }else{
  removeFavorites(poem.id)

 }
}




return (<div>
    <h1>{poem.title}</h1>
    <p><strong>{poem.content}</strong></p>
    <p><strong>- By {poem.author}</strong></p>
    <button onClick={()=>{setMark(!mark)}} >Mark As {mark?"Read":"Unread"}</button>
    <button style={buttonStyles} onClick={()=>{handleDelete(poem.id)}}>Remove</button>
    <BsSuitHeartFill size={28} style={{color:heart?"red":""}} onClick={handleHeart}/>
 

  
  </div>)
}

export default Poem;
