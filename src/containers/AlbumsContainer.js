import React from 'react'
import { connect } from 'react-redux'
import { fetchAlbums } from '../actions/albumActions'
import Albums from '../components/Albums'

class AlbumsContainer extends React.Component {

   state ={
      data: [],
      loading: false,
      selectedAlbum: {}
   }

   componentDidMount() {
      this.props.fetchAlbums()
   }

   render() {
      const { albums, loading } = this.props;
      if (loading) {
         return (
            <h1>Albums Loading</h1>
         )
      } else {
         return (
            <div>
               <Albums albums={albums} />
            </div>
         )
      }
   }

}

const mapStateToProps = (state) => {
   return {
      albums: state.albums.data,
      loading: state.albums.loading
   }
}

export default connect(mapStateToProps, { fetchAlbums })(AlbumsContainer)