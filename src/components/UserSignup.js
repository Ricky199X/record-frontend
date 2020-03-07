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
      console.log(prevProps)
      console.log(this.props)
      if (!prevProps.user.loggedIn && this.props.user.loggedIn) {
         this.setState({
            shouldRedirect: true
         })
      }
   }

   // this is an UNCONTROLLED FORM - the form itself is controlling the value atm
   // we need to turn the uncontrolled from to a controlled form by adding a value 
   // redirect 

   // handle user name changes
   handleUsernameChange = (event) => {
      this.setState({
         username: event.target.value
      })
   }

   // handle email changes
   handleEmailChange = (event) => {
      this.setState({
         email: event.target.value
      })
   }

   // handle password changes
   handlePasswordChange = (event) => {
      this.setState({
         password: event.target.value
      })
   }

   // handle submit
   handleSubmit = (event) => {
      // sends the state to the createUser action creator -> 
      // data will be coming from the state
      event.preventDefault()
      this.props.createUser(this.state)
      // this.props.loginUser(this.state)
   }
   
   render() {
      console.log(this.state.shouldRedirect)
      if (this.state.shouldRedirect) {
         return <Redirect to='/dashboard'/>
      } else {
      return (
         <div>
            <form onSubmit={this.handleSubmit} >
               <label>Username:</label>
               <input onChange={this.handleUsernameChange} type='text' name='username' placeholder='Enter your Username' value={this.state.username}/>
               <label>Email Address:</label>
               <input onChange={this.handleEmailChange} type='text' name='email' placeholder='Email address' value={this.state.email}/>
               <label>Password:</label>
               <input onChange={this.handlePasswordChange} type='text' name='password' placeholder='Enter password' value={this.state.password}/>
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

// className="col s12" 