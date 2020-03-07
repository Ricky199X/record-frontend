import React from 'react'
import { connect } from 'react-redux'
import AlbumCard from './AlbumCard'
import { setAlbum } from '../actions/albumActions'
import { Redirect } from 'react-router-dom'

// will render all albums in db
// when you click the album, it will render an album card

class Albums extends React.Component {
   

   state = {
      displayDetails: false
   }

   // selectAlbum = (event) => {
   //    event.preventDefault()
   //    this.props.setAlbum(this.props.album)
   //    this.setState({
   //       displayDetails: true
   //    })
   // }

   // renderAlbums = () => {
   //    const albums = this.props.albums
      
   //    return albums.map(album => {
   //       return (
   //          <div className="row s19" key={Math.random()}>
   //             <div key={album.attributes.name} className="col s6" >
   //                   <img alt={album.id} src={album.attributes.cover_url} onClick={this.selectAlbum}/>
   //                   {this.state.displayDetails ? <AlbumCard album={album}/> : null}
   //             </div>
   //          </div>
   //       )
   //    })
   // }

   renderAlbums = () => {
      const albums = this.props.albums
      // console.log(albums)
      return albums.map(album => {
         return <AlbumCard 
            name={album.attributes.name}
            img={<img alt={album.id} src={album.attributes.cover_url} onClick={this.selectAlbum} />}
            src={album.attributes.cover_url} 
            key={album.attributes.name} 
         />
      })
   }

   // render() {
   //    return this.props.album ? (<Redirect to={`/albums/${this.props.album.id}`} />) 
   //    : (
      
   //       <div key={Math.random()}>
   //          {this.renderAlbums()}
   //       </div>
      
   //    )
   // }


   render() {
      return (
         <div>
            {this.renderAlbums()}
         </div>
      )
   }

}


// const mapStateToProps = ({state}) => {
//    return {
//       state
//    }
// }


export default Albums //connect(mapStateToProps, { setAlbum } ) (Albums)



// const Albums = ({ albums }) => {

//    return (
      // <div className="container">
      //    <div className="row s12" >
      //       {albums.map(({ id, attributes: { name, release_date, label, cover_url } }) => (
      //          <div key={id} className="col s4" >
      //             <img alt={name} src={cover_url} onClick={selectAlbum}/>
      //             {/* <p>Name: {name}</p>
      //             <p>Label: {label}</p>
      //             <p>Release Data: {release_date}</p> */}
      //          </div>
      //       ))}
      //    </div>
      // </div>
//    )
  
// }