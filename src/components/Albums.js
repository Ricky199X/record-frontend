import React from 'react'


const Albums = ({ albums }) => {
   return (
      <div className="container">
         <div className="row s12">
            {albums.map(({ id, attributes: { name, release_date, label, cover_url } }) => (
               <div key={id} className="col s4">
                  <img alt={name} src={cover_url} />
                  <p>Name: {name}</p>
                  <p>Label: {label}</p>
                  <p>Release Data: {release_date}</p>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Albums