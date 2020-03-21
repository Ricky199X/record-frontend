import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser} from '../actions/userActions'
import {withRouter } from 'react-router'


class UserAlbumDetails extends React.Component {

   componentDidMount() {
      this.props.getCurrentUser()  
   }

   renderUserAlbum = (userAlbums, albumId) => {
      const userAlbum = userAlbums.find(album => album.id === parseInt(albumId))
      const currentUserId = this.props.user.data.id

      return (
         // need to handle case if null - need to re-render the previous page
         <div>
            <img alt={userAlbum.name} src={userAlbum.cover_url} width="300" height="300"/>
            {/* <h5>Artist: {userAlbum.attributes.artist.name}</h5> */}
            <h5>Album Name: {userAlbum.name}</h5> 
            <h5>Release Date: {userAlbum.release_date}</h5> 
            <h5>Record Label: {userAlbum.label}</h5>
            <h5>Popularity: {userAlbum.popularity}</h5>
   
            {/* delete album button */}
            {/* <button onClick={() => this.handleDeleteUserAlbum(albumId, currentUserId)}>Delete Album</button> */}
            
         </div>
      )
   }

   // DELETE USER ALBUM ACTION - WILL NEED THIS LATER ON 
   // handleDeleteUserAlbum = (albumId, currentUserId) => {
   //    this.props.deleteUserAlbum(albumId, currentUserId)
   // }

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


const mapStateToProps = ({user, albums}) => {
   return { user, albums } 
}
 
export default withRouter(connect(mapStateToProps, {getCurrentUser})(UserAlbumDetails))
