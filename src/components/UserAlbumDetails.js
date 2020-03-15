import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserAlbum } from '../actions/userActions'

const UserAlbumDetails = (props) => {

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

   // const handleAddUserAlbum = (album, currentUserId) => {
   //    props.addUserAlbum(album, currentUserId)
   // }

   return (
      <div>
         
         
      </div>
   )
}

const mapStateToProps = ({albums, user}) => {
   return { albums, user }
}
 
export default connect(mapStateToProps, {getUserAlbum})(UserAlbumDetails)
