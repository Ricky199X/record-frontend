// this is a form component, used for setting up new user account
import React from 'react'
import { connect } from 'react-redux'
import { createUser, loginUser } from '../actions/userActions'

class UserSignup extends React.Component {
   constructor(props) {
      super(props);
  
      this.state = {
        username: "",
        email: "",
        password: "",
      };
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
      console.log(this.props)
      console.log(this.state)
      this.props.createUser(this.state)
      // this.props.loginUser(this.state)
   }
   
   render() {
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


export default connect(null, {createUser, loginUser})(UserSignup)

// className="col s12" 