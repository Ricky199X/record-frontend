import React from 'react'
import { useParams } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addUserAlbum } from '../actions/userActions'

const AlbumDetails = (props) => {
   console.log(props)

   // get the url params
   let {id} = useParams()

   let album = props.albums.data.find(a => a.id == id)
  
   // defines the current user's ID 
   let currentUserId = props.user.data.id

   // renders the songs from the album currently being viewed
   const renderSongsContainer = (album) => {
      let songs = album.attributes.songs
      // map thru album.attributes.songs
      return songs.map(song => {
         return <section className = "songs-container" key={Math.random()}>
            <ol>
            <li id={song.name} >{song.name}</li>
            </ol>
         </section>
      })
   }

   const handleAddUserAlbum = (album, currentUserId) => {
      props.addUserAlbum(album, currentUserId)
      window.location="/dashboard"
   }

   return (
      <div>
         <img alt={album.attributes.name} src={album.attributes.cover_url} width="300" height="300"/>
         <h5>Artist: {album.attributes.artist.name}</h5>
         <h5>Album Name: {album.attributes.name}</h5> 
         <h5>Release Date: {album.attributes.release_date}</h5> 
         <h5>Record Label: {album.attributes.label}</h5>
         <h5>Popularity: {album.attributes.popularity}</h5>
         {renderSongsContainer(album)}

         {/* add album button */}
         <button onClick={() => handleAddUserAlbum(album, currentUserId)}>Add Album</button>
         
      </div>
   )
}

const mapStateToProps = ({albums, user}) => {
   return { albums, user }
}
 
export default withRouter(connect(mapStateToProps, {addUserAlbum})(AlbumDetails))
