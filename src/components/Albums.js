// Presentational Component - gets the individual album passed down 
import React from 'react'
import AlbumThumbnail from './AlbumThumbnail'
import { Link } from 'react-router-dom'

// will render all albums in db
// when you click the album, it will render an album card

class Albums extends React.Component {

   state = {
      likes: 0
   }

   handleLike = () => {
      this.setState({
         likes: this.state.likes + 1
      })
   }

   renderAlbums = (album) => {
      return (
         <Link to={`/albums/${album.album.id}`} key={Math.random()}>
            <AlbumThumbnail
               name={album.album.attributes.name}
               img={<img alt={album.album.id} src={album.album.attributes.cover_url} />}
               src={album.album.attributes.cover_url}
               likes={this.state.likes}
               key={album.album.attributes.name}
            />
         </Link>
      )
   }


   render() {
      return (
         <div class="all-albums-container">
            {this.props ? this.renderAlbums(this.props) : null}
         </div>

      )
   }
}


export default Albums
