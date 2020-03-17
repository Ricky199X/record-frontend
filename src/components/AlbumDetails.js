import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { addUserAlbum } from '../actions/userActions'
import { Redirect } from 'react-router-dom'

const AlbumDetails = (props) => {
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
      console.log(album)
      console.log(currentUserId)
      props.addUserAlbum(album, currentUserId)
      console.log(props)

      // redirect statment to the dashboard - if album we just added is in user.user_albums, redirect to users dashbaord. 
      // if no data, do nothing
      if (props.user_albums.includes(album)) {
         return <Redirect to='/dashboard'/>
      } else {
         return <Redirect to='/albums' />
      }
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
 
export default connect(mapStateToProps, {addUserAlbum})(AlbumDetails)
