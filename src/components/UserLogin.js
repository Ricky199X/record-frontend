import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/userActions'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'


class UserLogin extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         username: "",
         email: "",
         password: "",
         shouldRedirect: false
      };
   }

   // check for if redirect should occur
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
      event.preventDefault()
      this.props.loginUser(this.state)
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
                        Welcome to the party. Please log back in.
                     </h5>
                  </div>
               </section>

               {/* Form */}
               <section class="section form-section">
                  <div class="row">
                     <form class="col s12 l12" onSubmit={this.handleSubmit} >
                        <label class="white-text">Username:</label>


                        <input class="grey-text lighten-5"
                           onChange={this.handleFormChange}
                           type='text' name='username'
                           value={this.state.username}
                        />

                        <label class="white-text">Email Address:</label>
                        <input
                           class="grey-text lighten-5"
                           onChange={this.handleFormChange}
                           type='text'
                           name='email'
                           value={this.state.email}
                        />

                        <label class="white-text">Password:</label>
                        <input
                           class="grey-text lighten-5"
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
                     Log in!
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

export default connect(mapStateToProps, { loginUser })(UserLogin)


