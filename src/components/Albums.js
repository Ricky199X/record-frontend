// Presentational Component - gets the individual album passed down 
import React from 'react'
import Album from './Album'
import { Link } from 'react-router-dom'

// will render all albums in db
// when you click the album, it will render an album card

const Albums = (props) => {
   return (
      <div className="row">
         <div className="col s12">
            <Link to={`/albums/${props.album.id}`} key={Math.random()}>
            <Album 
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


export default Albums
