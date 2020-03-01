// will render other components, pass them data if they require it, and contain the callback functions etc.

import React from 'react'
import UserSignup from '../components/UserSignup'
import UserAlbums from '../components/UserAlbums'
import Users from '../components/Users'
// import { fetchUsers } from '../actions/userActions'

import { connect } from 'react-redux'

class UsersContainer extends React.Component {



   render() {

      if (this.props.user.loading) {
         return (
            <h1>This is loading</h1>
         )
      } else {
         return (
            <div>
               <UserSignup />
               {this.props.user.data.data ? this.props.user.data.data.attributes.username : 'no user is logged in'}
            </div>
         )
      }
      
   }

}

const mapStateToProps = (state) => {
   return {
      user: state.user
   }
}


export default connect(mapStateToProps)(UsersContainer)