import React from 'react'
import { connect } from 'react-redux'
import { fetchAlbums } from '../actions/albumActions'
import { getCurrentUser } from '../actions/userActions'
import Albums from '../components/Albums'

class AlbumsContainer extends React.Component {



   renderAlbumThumbnails = () => {
      const albums = this.props.albums.data

      return albums.map(album => {
         return (
            <div class="album-image-container" key={Math.random()}>
               <Albums album={album} />
            </div>
         )
      })
   }

   render() {
      if (this.props.loading === true) {
         return (
            <h1>Albums Loading!</h1>
         )
      } else {
         return (
            this.renderAlbumThumbnails()
         )
      }
   }

}

const mapStateToProps = ({ albums, user }) => {
   return { albums, user }
}

export default connect(mapStateToProps, { fetchAlbums, getCurrentUser })(AlbumsContainer)