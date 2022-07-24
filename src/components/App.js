import React,{useState,useEffect} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import FavoritePoem from "./FavoritePoem";

function App() {
const[poems,setPoems]=useState([])
const[formToggle,setToggle]=useState(true)
const [favorite,setFavorite]=useState([])

function handleToggle() {
  setToggle((formToggle)=>!formToggle)
}

function handleAddPoem(newPoem) {
  
  setPoems([...poems,newPoem])
}

useEffect(() => {
  fetch("http://localhost:8004/poems")
    .then(response=>response.json())
    .then(data=>{
      setPoems(data)
    })

},[])

function handleDelete(id) {
  setPoems(poems.filter(poem=>poem.id !==id))
  setFavorite(favorite.filter(poem=>poem.id !==id))
  fetch('http://localhost:8004/poems/' + id, {
  method: 'DELETE',
})
}

function addFovirites(id){
  if(favorite.some((fav)=>fav.id===id)===false){
  const items=poems.find(poem=>poem.id===id)
  setFavorite([...favorite,items])
}}

function removeFavorites(id) {
  setFavorite(favorite.filter(fav=>fav.id!==id))
}

  console.log(favorite)
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleToggle}>Show/hide new poem form</button>
        {formToggle ? <NewPoemForm handleAddPoem={handleAddPoem}/> : null}
        <h1 style={{color:"olive"}}>Favorite Poems</h1>
        {favorite.map(fav=><FavoritePoem key={fav.id} favorite={fav}/>)}
      </div>
      <PoemsContainer poems={poems} addFovirites={addFovirites} removeFavorites={removeFavorites} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
