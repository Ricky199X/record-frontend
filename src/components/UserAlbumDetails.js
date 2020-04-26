import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class UserAlbumDetails extends React.Component {

   renderUserAlbum = (userAlbums, albumId) => {
      const userAlbum = userAlbums.find(album => album.id === parseInt(albumId))

      return (
         <div>
            <img alt={userAlbum.name} src={userAlbum.cover_url} width="300" height="300" />
            <h5 class="white-text">Album Name: {userAlbum.name}</h5>
            <h5 class="white-text">Release Date: {userAlbum.release_date}</h5>
            <h5 class="white-text">Record Label: {userAlbum.label}</h5>
            <h5 class="white-text">Popularity: {userAlbum.popularity}</h5>
         </div>
      )
   }

   render() {
      let userAlbums = this.props.user.user_albums
      let albumId = this.props.match.params.id;
      let userId = this.props.user.data.id

      return (
         <div>
            {userAlbums ? this.renderUserAlbum(userAlbums, albumId) : null}
         </div>
      )
   }
}


const mapStateToProps = ({ user }) => {
   return { user }
}

export default withRouter(connect(mapStateToProps)(UserAlbumDetails))
