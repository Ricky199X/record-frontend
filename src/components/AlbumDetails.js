import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAlbums } from '../actions/albumActions'

const AlbumDetails = (props) => {

   // get the url params
   let {id} = useParams()

   let album = props.albums.data.find(a => a.id == id)

   return (
      <div>
         <h1>Now looking at {album.attributes.name}</h1> 
         <h4>Release Date: {album.attributes.release_date}</h4> 
         <h4>Record Label: {album.attributes.label}</h4>
         <h4>Popularity: {album.attributes.popularity}</h4>
        
      </div>
   )
}

const mapStateToProps = ({albums}) => {
   return { albums }
}

export default connect(mapStateToProps)(AlbumDetails)