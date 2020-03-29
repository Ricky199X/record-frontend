// Presentational Component - gets the individual album passed down 
import React from 'react'
import Album from './Album'
import { Link } from 'react-router-dom'

// will render all albums in db
// when you click the album, it will render an album card

class Albums extends React.Component {

   state = {
      likes: 0
   }

   handleLike = () => {
      this.setState({
         likes: this.state.likes + 1
      })
   }
 
   render() {
      return (
         <div className="row">
            <div className="col s12">
               <Link to={`/albums/${this.props.album.id}`} key={Math.random()}>
               <Album 
                  name={this.props.album.attributes.name}
                  img={<img alt={this.props.album.id} src={this.props.album.attributes.cover_url}  />}
                  src={this.props.album.attributes.cover_url} 
                  likes={this.state.likes}
                  key={this.props.album.attributes.name} 
               />
               </Link>
               <button onClick={this.handleLike}>Like Album</button>
            </div>
         </div>
      )
   }
}


export default Albums
