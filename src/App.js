// App.js is CONTAINER COMPONENT - Doesn't render any HTML of its own, strictly handles routing + manages app state

// Redux and React-Router-Dom imports
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/userActions'
import { fetchAlbums } from './actions/albumActions'

// Component Imports
import AlbumsContainer from './containers/AlbumsContainer'
import NavBar from './components/NavBar';
import Home from './components/Home'
import UserSignup from './components/UserSignup';
import UserLogin from './components/UserLogin'
import Dashboard from './components/Dashboard';
import AlbumDetails from './components/AlbumDetails'
import UserAlbumDetails from './components/UserAlbumDetails'
import LogoutView from './components/LogoutView'


class App extends React.Component {

  // to not lose the currentUser on page refresh: 
  // need a component did mount of getting current user anytime app loads
  // hits end point everytime the page reloads -> calls to users controller

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchAlbums()
  }


  render() {
    let userLoginStatus = this.props.state.user.loggedIn
    let currentUserName = this.props.state.user.data.username
    
    return (
      <Router>
        <div>
          <NavBar userLoginStatus={userLoginStatus} currentUserName={currentUserName}/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={UserLogin}/>
            <Route exact path='/signup' component={UserSignup}/>
            <Route exact path='/dashboard' component={Dashboard} currentUserId={this.props.currentUserId} userLoginStatus={userLoginStatus} />
            <Route exact path='/albums' component={AlbumsContainer}/>
            <Route path='/your-albums' component={Dashboard} currentUserId={this.props.currentUserId}/>

            <Route path='/albums/:id'>
              <AlbumDetails />
            </Route> 

            <Route path='/users/:id/user_albums/:id'>
              <UserAlbumDetails />
            </Route> 

            <Route exact path='/logout' component={LogoutView}/>
          </Switch>

        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps, {getCurrentUser, fetchAlbums})(App);
