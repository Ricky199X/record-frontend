import React from 'react'
// import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser} from '../actions/userActions'
// import { render } from '@testing-library/react'
import {withRouter } from 'react-router'


class UserAlbumDetails extends React.Component {
   // get the url params
   // let id = useParams()
   
   // let userLoginStatus = props.userLoginStatus
   // let userAlbum = props.user.user_albums.find(album => album.id === parseInt(id))

   // defines the current user's ID - will use later in delete action
   // let currentUserId = props.user.data.id

   componentDidMount() {
      this.props.getCurrentUser()  
   }

   renderUserAlbum = (userAlbums, albumId) => {
      const userAlbum = userAlbums.find(album => album.id === parseInt(albumId))

      return (
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

   // return userAlbum === null && userLoginStatus === false ? 
   // (
   //    <div>Album Loading!</div>
   // )
   // :
   // (
   //    // need to handle case if null - need to re-render the previous page
   //    <div>
   //       <img alt={userAlbum.name} src={userAlbum.cover_url} width="300" height="300"/>
   //       {/* <h5>Artist: {userAlbum.attributes.artist.name}</h5> */}
   //       <h5>Album Name: {userAlbum.name}</h5> 
   //       <h5>Release Date: {userAlbum.release_date}</h5> 
   //       <h5>Record Label: {userAlbum.label}</h5>
   //       <h5>Popularity: {userAlbum.popularity}</h5>
   //       {/* {renderSongsContainer(userAlbum)} */}

   //       {/* add album button */}
   //       {/* <button onClick={() => handleAddUserAlbum(album, currentUserId)}>Add Album</button> */}
         
   //    </div>
   // )

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

const mapDispatchToProps = (dispatch)=> {
   return {
 
      getCurrentUser: () => {
         dispatch(getCurrentUser())
      }
   };
};

const mapStateToProps = ({user, albums}) => {
   return { user, albums } 
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserAlbumDetails))
