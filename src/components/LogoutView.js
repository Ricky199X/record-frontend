// Logout screen - after successful logout, user is redirected here.
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/userActions'

class LogoutView extends Component {

   componentDidMount() {
      this.props.logoutUser()
  }

   render() {
      return (
         <div>
            <h1>Thank you for coming!</h1>
            <br></br>
            <Link to='/'>Home</Link>
         </div>
      )
   }
}

export default connect(null, {logoutUser})(LogoutView);