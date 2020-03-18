import React from 'react'
import AlbumThumbnail from './AlbumThumbnail'
import { BrowserRouter as Link } from 'react-router-dom'

// will render all albums in db
// when you click the album, it will render an album card

class Albums extends React.Component {
   
   state = {
      displayDetails: false,
   }

   renderAlbumThumbnails = () => {
      const albums = this.props.albums
      return albums.map(album => {
         return (
            <Link to={`/albums/${album.id}`} key={Math.random()}>
            <AlbumThumbnail 
               name={album.attributes.name}
               img={<img alt={album.id} src={album.attributes.cover_url}  />}
               src={album.attributes.cover_url} 
               key={album.attributes.name} 
            />
         </Link>
         )
      })
   }

   render() {
      return (
         <div >
            {this.renderAlbumThumbnails()}
         </div>
      )
   }

}


export default Albums
