import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { addUserAlbum } from '../actions/userActions'

class AlbumDetails extends React.Component {

   // function to dynamically find the album 
   renderAlbum = (albums, albumId) => {
      const album = albums.find(album => album.id === albumId)
      let currentUserId = this.props.user.data.id

      return (
         <div>
            <img alt={album.attributes.name} src={album.attributes.cover_url} width="300" height="300"/>
            <h5>Artist: {album.attributes.artist.name}</h5>
            <h5>Album Name: {album.attributes.name}</h5> 
            <h5>Release Date: {album.attributes.release_date}</h5> 
            <h5>Record Label: {album.attributes.label}</h5>
            <h5>Popularity: {album.attributes.popularity}</h5>
            {this.renderSongsContainer(album)}
   
            {/* add album button */}
            <button class="btn waves-effect waves-light" type="submit" name="action" onClick={() => this.handleAddUserAlbum(album, currentUserId)}>
               Add Album
            </button>
         </div>
      )
   }

   // renders the songs from the album currently being viewed
   renderSongsContainer = (album) => {
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

   // function to add the album to the user's collection
   handleAddUserAlbum = (album, currentUserId) => {
      this.props.addUserAlbum(album, currentUserId)
      window.location="/dashboard"
   }

   render() {
      let albums = this.props.albums.data
      let albumId = this.props.match.params.id

      return !this.props.user.loggedIn? 
      (
         <Redirect to='/dashboard' />
      )
      :
      (
         <div>
            {albums ? this.renderAlbum(albums, albumId) : null}
         </div>
      )
   }
}


const mapStateToProps = ({albums, user}) => {
   return { albums, user }
}
 
export default withRouter(connect(mapStateToProps, {addUserAlbum})(AlbumDetails))
