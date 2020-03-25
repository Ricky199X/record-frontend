// Renders all albums in a user's collection - functional component.

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AlbumThumbnail from './AlbumThumbnail'

const UserAlbums = (props) => {

   const userAlbums = props.user.user_albums
   const userId = props.currentUserId

   const renderUserAlbums = (userAlbumInfo, userId) => {
      return userAlbumInfo.map(userAlbum => {
         return (
            <Link to={`users/${userId}/user_albums/${userAlbum.id}`} key={Math.random()}>
               <AlbumThumbnail 
                  name={userAlbum.name}
                  img={<img alt={userAlbum.id} src={userAlbum.cover_url}  />}
                  src={userAlbum.cover_url} 
                  key={userAlbum.name} 
               />
            </Link>
         )
      })
   }


   return (
      <div>
         <h5>See your album collection below!</h5><br></br>
         {userAlbums ? renderUserAlbums(userAlbums, userId) : null}
      </div>
   )

}

const mapStateToProps = ({user}) => {
   return {user}
}  

export default connect(mapStateToProps)(UserAlbums)