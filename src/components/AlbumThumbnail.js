// Renders an individual album card -> Functional component, props passed thru Albums.js

import React from 'react'

const AlbumThumbnail = (props) => {

   return (

      // <div class="col s2">
      //    <div class="album-card">
      //       {props.img}
      //       <div class="likes-section">
      //          <h5 class="likes white-text lighten-1 center">Likes: {props.likes}</h5>
      //       </div>
      //    </div>
      // </div>

      <div class="row">
         <div class="col s12 m7 l4">
            <div class="card ">
               <div class="card-content center">
                  {props.img}
               </div>
               <div class="card-action green accent-4">
                  <h5 class="likes white-text lighten-1 center">Likes: {props.likes}</h5>
               </div>
            </div>
         </div>
      </div>

   )
}

export default AlbumThumbnail

