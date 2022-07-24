import React,{useState}from "react";
import { v4 as uuidv4 } from 'uuid';

function NewPoemForm({handleAddPoem}) {
 const [title,setTitle]=useState("");
 const [author,setAuthor]=useState("");
 const[textArea,setTextArea]=useState("")

function handleSubmit(e) {
  e.preventDefault();
  const newForm={
    title:title,
    author:author,
    content:textArea,
    id:uuidv4(),
  }
  handleAddPoem(newForm);

  fetch("http://localhost:8004/poems",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(newForm)
})

setTitle("");
setAuthor("");
setTextArea("")

}


  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
      <input placeholder="Author" value={author} onChange={(e)=>{setAuthor(e.target.value)}}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} value={textArea} onChange={(e)=>{setTextArea(e.target.value)}} />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
