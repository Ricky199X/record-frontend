import React from 'react';
import { BrowserRouter as Router, Switch , Route, Link } from 'react-router-dom'
import axios from 'axios'

import AlbumsContainer from './containers/AlbumsContainer'
import UsersContainer from './containers/UsersContainer'
import NavBar from './components/NavBar';
import UserAlbums from './components/UserAlbums'

import AlbumCard from './components/AlbumCard'
import LandingPage from './components/LandingPage'
import Albums from './components/Albums'

import Home from './components/Home'
import UserSignup from './components/UserSignup';
import UserLogin from './components/UserLogin'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }

   // {withCredentials: true};  This allows our Rails server to set and read the cookie on the front-end’s browser.
   loginStatus = () => {
    axios.get('http://localhost:3000/logged_in', { withCredentials: true })

    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  // handle login - set isLoggedIn to true
  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  // handle logout - set isLoggedIn to false
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

 
  // checks the login status everytime the component mounts
  componentDidMount() {
    this.loginStatus()
  }

  render() {
    return (
      <div>
         <Router>
          <Switch>
          <Route 
            exact path='/' 
            render={props => (
            <Home {...props} loggedInStatus={this.state.isLoggedIn}/>
            )}
          />
          <Route exact path='/login' 
              render={props => (
              <UserLogin {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
          />
            <Route exact path='/signup' 
              render={props => (
              <UserSignup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
          />
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App;



// <Router>
      //   <div>
      //     <ul>
      //       <li>
      //         <Link to="/landingpage">Landing Page</Link>
      //       </li>
      //       <li>
      //         <Link to="/">Home</Link>
      //       </li>
      //     </ul>

      //     <NavBar />
      //     <Switch>
      //       <Route path="/signup">
      //         <UserSignup />
      //       </Route>

      //       <Route path="/landingpage">
      //         <LandingPage />
      //       </Route>

      //       <Route path="/home">
      //         <Home />
      //       </Route>

      //       <Route path='/albums'>
      //         <AlbumsContainer />
      //       </Route>

      //       <Route path='/useralbums'>
      //         <UserAlbums />
      //       </Route>

      //     </Switch>

      //   </div>
      // </Router>