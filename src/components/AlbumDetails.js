import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { addUserAlbum } from '../actions/userActions'

class AlbumDetails extends React.Component {

   state = {
      likes: 0
   }

   handleLike = () => {
      this.setState({
         likes: this.state.likes + 1
      })
   }

   componentDidMount() {
      console.log(this.state)
   }
   // function to dynamically find the album 
   renderAlbum = (albums, albumId) => {
      // console.log(albums)
      const album = albums.find(album => album.id === albumId)
      let currentUserId = this.props.user.data.id

      return (
         <div class="album-container center ">
            <div class="row">
               <div class="col l12">
                  {/* Album Artwork + Basic Info*/}
                  <section class="album-artwork col l6 white-text flow-text">
                     <img alt={album.attributes.name} src={album.attributes.cover_url} width="400" height="400" />
                     <h5>Artist: {album.attributes.artist.name}</h5>
                     <h5>Album Name: {album.attributes.name}</h5>
                     <h5>Release Date: {album.attributes.release_date}</h5>
                     <h5>Record Label: {album.attributes.label}</h5>
                     <h5>Popularity: {album.attributes.popularity}</h5>
                     <h5>Like: {this.state.likes}</h5>
                  </section>

                  {/* Tracklisting + Add Album Button */}
                  <section class="album-details white-text col l6">
                     {this.renderSongsContainer(album)}
                  </section>
               </div>
            </div>

            {/* add album button */}
            <div class="row">
               <div class="col l6">
                  <section class="add-album-btn center">
                     <button class="btn waves-effect waves-light green accent-4" type="submit" name="action" onClick={() => this.handleAddUserAlbum(album, currentUserId)}>
                        Add Album
                     </button>
                  </section>
               </div>

               <div class="col l6">
                  <section class="like-album-btn center">
                     <button class="btn waves-effect waves-light green accent-4" name="action" onClick={() => this.handleLike()}>
                        Like Album
                     </button>
                  </section>
               </div>
            </div>
         </div >
      )
   }

   // renders the songs from the album currently being viewed
   renderSongsContainer = (album) => {
      let songs = album.attributes.songs
      // map thru album.attributes.songs
      return songs.map((song, i) => {
         return <div class="track" key={Math.random()}>
            <ul>
               <h4>
                  <li id={song.name}>{i + 1}. {song.name}</li>
               </h4>
            </ul>
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
