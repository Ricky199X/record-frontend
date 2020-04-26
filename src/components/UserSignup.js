// this is a Class component, used for setting up new user account
import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/userActions'
import { Redirect } from 'react-router-dom'

class UserSignup extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         username: "",
         email: "",
         password: "",
         shouldRedirect: false
      };
   }

   // handles whether or not redirect should occur - checks the logged in prop
   componentDidUpdate(prevProps) {
      if (!prevProps.user.loggedIn && this.props.user.loggedIn) {
         this.setState({
            shouldRedirect: true
         })
      }
   }

   // handle form changes
   handleFormChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   // handle submit
   handleSubmit = (event) => {
      // sends the state to the createUser action creator -> 
      // data will be coming from the state
      event.preventDefault()
      this.props.createUser(this.state)
   }

   render() {
      if (this.state.shouldRedirect) {
         return <Redirect to='/dashboard' />
      } else {
         return (
            <div class="page-container">

               {/* Message */}
               <section class="section message-section center">
                  <div class="welcome-message">
                     <h5 class="white-text">
                        Welcome to the party. Please sign up below.
                     </h5>
                  </div>
               </section>

               {/* Form */}
               <section class="section form-section">
                  <div class="row">
                     <form class="col s12 l12" onSubmit={this.handleSubmit} >
                        <label class="white-text">Username:</label>


                        <input class="white-text"
                           onChange={this.handleFormChange}
                           type='text' name='username'
                           value={this.state.username}
                        />

                        <label class="white-text">Email Address:</label>
                        <input
                           class="white-text"
                           onChange={this.handleFormChange}
                           type='text'
                           name='email'
                           value={this.state.email}
                        />

                        <label class="white-text">Password:</label>
                        <input
                           class="white-text"
                           onChange={this.handleFormChange}
                           type='password'
                           name='password'
                           value={this.state.password}
                        />
                     </form>
                  </div>
               </section>

               {/* Submit Button */}
               <section class="section button-section center">
                  <button class="btn-large green accent-4"
                     onClick={this.handleSubmit}>
                     Sign Up!
                  </button>
               </section>

            </div>
         )
      }
   }
}

const mapStateToProps = ({ user }) => {
   return { user }
}

export default connect(mapStateToProps, { createUser })(UserSignup)
