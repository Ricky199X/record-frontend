// will render other components, pass them data if they require it, and contain the callback functions etc.

import React from 'react'
import UserSignup from '../components/UserSignup'
import UserAlbums from '../components/UserAlbums'
import { fetchUsers } from '../actions/fetchUsers'

import { connect } from 'react-redux'

class UsersContainer extends React.Component {

   // fetch call to grab users from DB
   componentDidMount() {
      this.props.fetchUsers()
   }



   render() {
      return (
         <div>
            <UserSignup />
            <UserAlbums />
         </div>
      )
   }

}

const mapStateToProps = (state) => {
   return {
      // users: state.users
   }
}


export default connect(mapStateToProps, {fetchUsers})(UsersContainer)