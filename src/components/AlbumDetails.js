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
         <img alt={album.attributes.name} src={album.attributes.cover_url} width="300" height="300"/>
         <h5>Artist: {album.attributes.artist.name}</h5>
         <h5>Album Name: {album.attributes.name}</h5> 
         <h5>Release Date: {album.attributes.release_date}</h5> 
         <h5>Record Label: {album.attributes.label}</h5>
         <h5>Popularity: {album.attributes.popularity}</h5>
         {renderSongsContainer(album)}

         {/* add album button */}
         <button>Add Album</button>
         
      </div>
   )
}

const mapStateToProps = ({albums}) => {
   return { albums }
}

export default connect(mapStateToProps)(AlbumDetails)