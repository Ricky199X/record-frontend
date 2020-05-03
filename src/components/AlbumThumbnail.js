// Renders an individual album card -> Functional component, props passed thru Albums.js

import React from 'react'

const AlbumThumbnail = (props) => {

   return (

      <div class="col s2">
         <div class="album-card">
            <section class="album-img">
               {props.img}
            </section>

            <section class="likes-section">
               <h5 class="likes white-text lighten-1 center">Likes: {props.likes}</h5>
            </section>
         </div>
      </div>

   )
}

export default AlbumThumbnail

