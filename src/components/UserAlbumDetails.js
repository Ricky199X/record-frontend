import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
// import { getUserAlbum } from '../actions/userActions'

const UserAlbumDetails = (props) => {
   // get the url params
   let {id} = useParams()
   console.log(id, "this is id of the album that we selected")
   console.log(props, "these are the props")
   console.log(props.user.user_albums, "these are the user albums, prior to trying to set a userAlbum variable")
   let userAlbum = props.user.user_albums.find(album => album.id === parseInt(id))
  
   // defines the current user's ID - will use later in delete action
   let currentUserId = props.user.data.id

   // renders the songs from the userAlbum currently being viewed
   // const renderSongsContainer = (userAlbum) => {
   //    let songs = userAlbum.attributes.songs
   //    // map thru album.attributes.songs
   //    return songs.map(song => {
   //       return <section className = "songs-container" key={Math.random()}>
   //          <ol>
   //          <li id={song.name} >{song.name}</li>
   //          </ol>
   //       </section>
   //    })
   // }

   // DELETE USER ALBUM ACTION - WILL NEED THIS LATER ON 
   // const handleDeleteUserAlbum = (userAlbum, currentUserId) => {
   //    props.addUserAlbum(album, currentUserId)
   // }

   return !props.user.loggedIn? 
   (
      <div>Album Loading!</div>
   )
   :
   (
      // need to handle case if null - need to re-render the previous page
      <div>
         <img alt={userAlbum.name} src={userAlbum.cover_url} width="300" height="300"/>
         {/* <h5>Artist: {userAlbum.attributes.artist.name}</h5> */}
         <h5>Album Name: {userAlbum.name}</h5> 
         <h5>Release Date: {userAlbum.release_date}</h5> 
         <h5>Record Label: {userAlbum.label}</h5>
         <h5>Popularity: {userAlbum.popularity}</h5>
         {/* {renderSongsContainer(userAlbum)} */}

         {/* add album button */}
         {/* <button onClick={() => handleAddUserAlbum(album, currentUserId)}>Add Album</button> */}
         
      </div>
   )
}

const mapStateToProps = ({user}) => {
   return { user } 
}
 
export default connect(mapStateToProps)(UserAlbumDetails)
