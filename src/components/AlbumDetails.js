import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAlbums } from '../actions/albumActions'

const AlbumDetails = (props) => {

   // get the url params
   let {id} = useParams()

   let album = props.albums.data.find(a => a.id == id)
   console.log(props)

   // need to render the songs from each 
   const renderSongsContainer = (album) => {
      let songs = album.attributes.songs
      // console.log(songs)
      // map thru album.attributes.songs
      return songs.map(song => {
         return <section className = "songs-container" key={Math.random()}>
            <ol>
            <li id={song.name} >{song.name}</li>
            </ol>
         </section>
      })
   }

   return (
      <div>
         <img alt={album.id} src={album.attributes.cover_url} />
         <h4>Artist: {album.attributes.artist.name}</h4>
         <h4>Album Name: {album.attributes.name}</h4> 
         <h4>Release Date: {album.attributes.release_date}</h4> 
         <h4>Record Label: {album.attributes.label}</h4>
         <h4>Popularity: {album.attributes.popularity}</h4>
         {renderSongsContainer(album)}
         
      </div>
   )
}

const mapStateToProps = ({albums}) => {
   return { albums }
}

export default connect(mapStateToProps)(AlbumDetails)