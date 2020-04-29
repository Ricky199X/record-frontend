// Renders an individual album card -> Functional component, props passed thru Albums.js

import React from 'react'

const AlbumThumbnail = (props) => {

   return (

      <div class="card">
         {props.img}
         <h5 class="grey-text lighten-1">Likes: {props.likes}</h5>
      </div>



   )

}

export default AlbumThumbnail

