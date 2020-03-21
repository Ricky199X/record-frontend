// Presentational Component - gets the individual album passed down 
import React from 'react'
import AlbumThumbnail from './AlbumThumbnail'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchAlbums } from '../actions/albumActions'
import { getCurrentUser } from '../actions/userActions'

// will render all albums in db
// when you click the album, it will render an album card

const Albums = (props) => {
   return (
      <div className="row">
         <div className="col s12">
            <Link to={`/albums/${props.album.id}`} key={Math.random()}>
            <AlbumThumbnail 
               name={props.album.attributes.name}
               img={<img alt={props.album.id} src={props.album.attributes.cover_url}  />}
               src={props.album.attributes.cover_url} 
               key={props.album.attributes.name} 
            />
            </Link>
         </div>
      </div>
   )
}

const mapStateToProps = ({albums, user}) => {
   return { albums, user }
}

export default connect(mapStateToProps, { fetchAlbums, getCurrentUser })(Albums)
