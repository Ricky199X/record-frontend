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
  

   selectAlbum = (event) => {
      event.preventDefault()
      // debugger
      this.props.setAlbum(this.props.album)
      this.setState({
         displayDetails: true
      })
   }

   renderAlbums = () => {
      const albums = this.props.albums
      
      return albums.map(album => {
         return (
            <div className="row s19" key={Math.random()}>
               <div key={album.attributes.name} className="col s6" >
                     <img alt={album.id} src={album.attributes.cover_url} onClick={this.selectAlbum}/>
                     {this.state.displayDetails ? <AlbumCard album={album}/> : null}
               </div>
            </div>
         )
      })
   }

   render() {
      // console.log(this.props)
      // const id = this.props.album.id

     
      // console.log(id)

      return this.props.album ? (<Redirect to={`/albums/${this.props.album.id}`} />) 
      : (
      
         <div key={Math.random()}>
            {this.renderAlbums()}
         </div>
      
      )
   }

}


const mapStateToProps = (state) => {
   return {
      albums: state.albums.data,
      album: state.albums.selectedAlbum,
      loading: state.albums.loading
   }
}


export default connect(mapStateToProps, { setAlbum } )(Albums)



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