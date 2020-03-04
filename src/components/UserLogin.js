import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/userActions'
import { Link } from 'react-router-dom'
import axios from 'axios'

class UserLogin extends React.Component {
   constructor(props) {
      super(props);
  
      this.state = {
        username: "",
        email: "",
        password: "",
        errors: ""
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
      const {username, email, password} = this.state
      let user = {
         username: username,
         email: email,
         password: password
      }
            
      axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
         .then(response => {
         if (response.data.logged_in) {
            this.props.handleLogin(response.data)
            this.redirect()
               } else {
               this.setState({
                  errors: response.data.errors
               })
            }
         })
      .catch(error => console.log('api errors:', error))
   }

   redirect = () => {
      this.props.history.push('/')
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

            <button placeholder="submit" type="submit">
               Log In
            </button>
            <div>
               or <Link to='/signup'>sign up</Link>
            </div>
         </div>
      )
   }
}

export default connect(null, {loginUser})(UserLogin)