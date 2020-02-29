// this is a form component, could be used for both setting up account

import React from 'react'

class UserSignup extends React.Component {
   constructor(props) {
      super(props);
  
      this.state = {
        username: "",
        email: "",
        password: ""
      };
    }

   // this is an UNCONTROLLED FORM - the form itself is controlling the value atm
   // we need to turn the uncontrolled from to a controlled form by adding a value 
   

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
      event.preventDefault()

      // needs to be a post request to the server - create action in users controller

      

   }
   
   render() {
      return (
         <div className="signup-form" >
            <form className="col s12" onSubmit={this.handleSubmit}>
               <label>Username:</label>
               <input onChange={this.handleUsernameChange} type='text' name='username' placeholder='Enter your Username' value={this.state.username}/>
               <label>Email Address:</label>
               <input onChange={this.handleEmailChange} type='text' name='email' placeholder='Email address' value={this.state.email}/>
               <label>Password:</label>
               <input onChange={this.handlePasswordChange} type='text' name='password' placeholder='Enter password' value={this.state.password}/>
            </form> 

            <input type="submit" />
         </div>
      )
   }
}

export default UserSignup
