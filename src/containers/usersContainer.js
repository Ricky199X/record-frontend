// will render other components, pass them data if they require it, and contain the callback functions etc.

import React from 'react'
import UserSignup from '../components/UserSignup'
import UserAlbums from '../components/UserAlbums'

import { connect } from 'react-redux'

class UsersContainer extends React.Component {


   render() {
      return (
         <div>
            <UserSignup />
            <UserAlbums />
         </div>
      )
   }

}



export default connect()(UsersContainer)