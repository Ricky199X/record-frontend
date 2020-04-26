// Logout screen - after successful logout, user is redirected here. Class Component.
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
            {/* Message */}
            <section class="section message-section center">
               <div class="goodbye-message">
                  <h5 class="white-text">
                     Thanks for coming. See you next time!
                     </h5>
               </div>
            </section>

            <section class="section home-button-section center">
               <button class="btn-large green accent-4">
                  <Link to='/' class="white-text">Home</Link>
               </button>
            </section>
         </div>
      )
   }
}

export default connect(null, { logoutUser })(LogoutView);