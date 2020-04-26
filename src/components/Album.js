// Renders an individual album card -> Functional component, props passed thru Albums.js

import React from 'react'

const Album = (props) => {

   return (
      <div class="album-border">
         <div class="album-cover">
            {props.img}

         </div>

         <h5 class="grey-text lighten-1">Likes: {props.likes}</h5>
      </div>



   )

}

export default Album