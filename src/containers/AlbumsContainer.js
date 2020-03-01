import React from 'react'
import Albums from '../components/Albums'

import { connect } from 'react-redux'

class AlbumsContainer extends React.Component {


   render() {
      if (this.props.albums.loading) {
         return (
            <h1>Albums Loading</h1>
         )
      } else {
         return (
            <div>
               <Albums />
            </div>
         )
      }
   } 




}