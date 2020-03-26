// Renders an individual album card -> Functional component, props passed thru Albums.js

import React from 'react'

const Album = (props) => {
   console.log(props)
   return (
      <div>{props.img}</div>
   )

}

export default Album