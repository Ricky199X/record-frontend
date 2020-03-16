// this component gets list of user albums - functional component

import React from 'react'
import { Link } from 'react-router-dom'
import AlbumThumbnail from './AlbumThumbnail'
import { connect } from 'react-redux'
import { getUserAlbum } from '../actions/userActions'

const UserAlbums = (props) => {
   const albums = props.albums
   const userId = props.currentUserId

   return (
      
      <div>
         <h5>See your album collection below!</h5>
         {albums ? renderUserAlbums(albums, userId) : null}
      </div>
   )
}


const renderUserAlbums = (userAlbumInfo, userId) => {
   return userAlbumInfo.data.map(userAlbum => {
      return (
         <Link to={`users/${userId}/albums/${userAlbum.id}`} key={Math.random()}>
            <AlbumThumbnail 
               name={userAlbum.attributes.name}
               img={<img alt={userAlbum.id} src={userAlbum.attributes.cover_url}  />}
               src={userAlbum.attributes.cover_url} 
               key={userAlbum.attributes.name} 
            />
         </Link>
      )
   })
}

const mapStateToProps = ({user}) => {
   return {user}
}  



export default connect(mapStateToProps, {getUserAlbum})(UserAlbums)