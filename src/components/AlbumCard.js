import React from 'react'


const AlbumCard = (props) => {

   // console.log(album)

   // return (
   //    <div className="container">
   //       <div className="row s12">
   //             <div key={album.id} className="col s4">
   //                <p>Name: {album.name}</p>
   //                <p>Label: {album.label}</p>
   //                <p>Release Data: {album.release_date}</p>
   //             </div>
   //       </div>
   
   //    </div>
   // )

   return (
      <h2>{props.img}</h2>
   )

}

export default AlbumCard