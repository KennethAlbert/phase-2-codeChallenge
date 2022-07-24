import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems,handleDelete,addFovirites,removeFavorites}) {
  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      {poems.map(poem=>{
      return <Poem
       key={poem.id}
       poem={poem}
       handleDelete={handleDelete}
       addFovirites={addFovirites}
       removeFavorites={removeFavorites}
       />

      })}
      
    </div>
  );
}

export default PoemsContainer;
