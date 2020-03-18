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
      this.props.loginUser(this.state)
   }
   
   render() {
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
                  <button onClick={this.handleSubmit}>Log In!</button>
               <div>
                  or <Link to='/signup'>sign up</Link>
               </div>
            </div>
         )
      }
   }
}

const mapStateToProps = ({user}) => {
   return { user }
}

export default connect(mapStateToProps, {loginUser})(UserLogin)