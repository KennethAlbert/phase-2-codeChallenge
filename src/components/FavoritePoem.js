import React from 'react'

function FavoritePoem({favorite}) {



  return (
    <div style={{borderBottom:"1px solid"}}>
    <h2>{favorite.title}</h2>    
   <p>{favorite.content}</p>
   <p><strong>- By {favorite.author}</strong></p>

    </div>
  )
}

export default FavoritePoem;