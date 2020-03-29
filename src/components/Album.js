// Renders an individual album card -> Functional component, props passed thru Albums.js

import React from 'react'

const Album = (props) => {
   
   return (
      <div>
         {props.img}
         <h5>Likes: {props.likes}</h5>
      </div>

   )

}

export default Album