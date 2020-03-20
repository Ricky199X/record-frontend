import React from 'react'
import { useParams } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addUserAlbum, getCurrentUser } from '../actions/userActions'
import { fetchAlbums } from '../actions/albumActions'

class AlbumDetails extends React.Component {

   // add a componentDidMount, fetch the albums again, because it will lose it when you refresh
   componentDidMount() {
      console.log("component loaded")
      console.log(this.props)
      this.props.fetchAlbums()
      this.props.getCurrentUser()
   }
   // get the url params
   // let {id} = useParams()
   // let album = props.albums.data.find(a => a.id == id)
  
   // defines the current user's ID 
   // let currentUserId = props.user.data.id

   // render the album itself
   renderAlbum = (albums, albumId) => {
      const album = albums.find(album => album.id === albumId)
      let currentUserId = this.props.user.data.id

      return (
         // need to handle case if null - need to re-render the previous page
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

   handleAddUserAlbum = (album, currentUserId) => {
      this.props.addUserAlbum(album, currentUserId)
      window.location="/dashboard"
   }

   render() {
      let albums = this.props.albums.data
      let albumId = this.props.match.params.id

      return (
         <div>
            <div>
            {albums ? this.renderAlbum(albums, albumId) : null}
         </div>
         </div>
      )
   }
}


const mapStateToProps = ({albums, user}) => {
   return { albums, user }
}
 
export default withRouter(connect(mapStateToProps, {getCurrentUser, fetchAlbums})(AlbumDetails))
