// this is a form component, used for setting up new user account
import React from 'react'
import { connect } from 'react-redux'
import { createUser, loginUser } from '../actions/userActions'
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
         return <Redirect to='/dashboard'/>
      } else {
      return (
         <div>
            <form onSubmit={this.handleSubmit} >
               <label>Username:</label>
               <input onChange={this.handleFormChange} type='text' name='username' placeholder='Enter your Username' value={this.state.username}/>
               <label>Email Address:</label>
               <input onChange={this.handleFormChange} type='text' name='email' placeholder='Email address' value={this.state.email}/>
               <label>Password:</label>
               <input onChange={this.handleFormChange} type='password' name='password' placeholder='Enter password' value={this.state.password}/>
            </form> 

            <button onClick={this.handleSubmit}>Sign Up!</button>
         </div>
         )
      }
   }
}

const mapStateToProps = ({user}) => {
   return { user }
}

export default connect(mapStateToProps, {createUser, loginUser})(UserSignup)
