import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAlbums } from '../actions/albumActions'

const AlbumDetails = () => {

   // get the url params
   let {id} = useParams()



   return (
      <div>
         <h1>Now looking at {id}</h1> 
      </div>
   )
}

const mapStateToProps = ({album}) => {
   return { album }
}

export default connect(mapStateToProps)(AlbumDetails)