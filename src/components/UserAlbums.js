// this component gets list of user albums - functional component

import React from 'react'

const UserAlbums = (props) => {


   console.log(props)
   // renderAlbumThumbnails = () => {
   //    const user_albums = this.props.albums
   //    return albums.map(album => {
   //       return (
   //          <Link to={`/albums/${album.id}`} key={Math.random()}>
   //          <AlbumThumbnail 
   //             name={album.attributes.name}
   //             img={<img alt={album.id} src={album.attributes.cover_url}  />}
   //             src={album.attributes.cover_url} 
   //             key={album.attributes.name} 
   //          />
   //       </Link>
   //       )
   //    })
   // }

   return (
      <div>
         Connecting to User Albums
      </div>
   )
}


export default UserAlbums