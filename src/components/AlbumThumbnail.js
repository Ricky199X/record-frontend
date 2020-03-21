// Renders an album thumbnail -> Functional component

import React from 'react'

const AlbumThumbnail = (props) => {
   console.log(props)
   return (
      <div>{props.img}</div>
   )

}

export default AlbumThumbnail