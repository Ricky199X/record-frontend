import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { addUserAlbum } from '../actions/userActions'

class AlbumDetails extends React.Component {


   // function to dynamically find the album 
   renderAlbum = (albums, albumId) => {
      // console.log(albums)
      const album = albums.find(album => album.id === albumId)
      let currentUserId = this.props.user.data.id

      return (
         <div class="album-container">
            <div class="row">
               <div class="col l12">
                  {/* Album Artwork + Basic Info*/}
                  <section class="album-artwork col l6 white-text center">
                     <img alt={album.attributes.name} src={album.attributes.cover_url} width="400" height="400" />
                     <h5>Artist: {album.attributes.artist.name}</h5>
                     <h5>Album Name: {album.attributes.name}</h5>
                     <h5>Release Date: {album.attributes.release_date}</h5>
                     <h5>Record Label: {album.attributes.label}</h5>
                     <h5>Popularity: {album.attributes.popularity}</h5>
                  </section>

                  {/* Tracklisting + Add Album Button */}
                  <section class="album-details white-text col l6">
                     {this.renderSongsContainer(album)}
                  </section>
               </div>
            </div>

            {/* add album button */}
            <div class="row">
               <div class="col l12">
                  <section class="add-album-btn">
                     <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => this.handleAddUserAlbum(album, currentUserId)}>
                        Add Album
                     </button>
                  </section>
               </div>
            </div>
         </div>
      )
   }

   // renders the songs from the album currently being viewed
   renderSongsContainer = (album) => {
      let songs = album.attributes.songs
      // map thru album.attributes.songs
      return songs.map(song => {
         return <div class="track" key={Math.random()}>
            <ol>
               <h4>
                  <li id={song.name}>{song.name}</li>
               </h4>
            </ol>
         </div>
      })
   }

   // function to add the album to the user's collection
   handleAddUserAlbum = (album, currentUserId) => {
      this.props.addUserAlbum(album, currentUserId)
      window.location = "/dashboard"
   }

   render() {
      let albums = this.props.albums.data
      let albumId = this.props.match.params.id

      return !this.props.user.loggedIn ?
         // console.log(this.props)
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


const mapStateToProps = ({ albums, user }) => {
   return { albums, user }
}

export default withRouter(connect(mapStateToProps, { addUserAlbum })(AlbumDetails))
