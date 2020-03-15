import React from 'react';
import { BrowserRouter as Router, Switch , Route, Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser, getCurrentUser } from './actions/userActions'
import AlbumsContainer from './containers/AlbumsContainer'
import UsersContainer from './containers/UsersContainer'
import NavBar from './components/NavBar';
import UserAlbums from './components/UserAlbums'
import Home from './components/Home'
import AlbumThumbnail from './components/AlbumThumbnail'
import Albums from './components/Albums'
import UserSignup from './components/UserSignup';
import UserLogin from './components/UserLogin'
import Dashboard from './components/Dashboard';
import AlbumDetails from './components/AlbumDetails'



class App extends React.Component {

  // to not lose the currentUser on page refresh: 
  // need a component did mount of getting current user anytime app loads
  // hits end point everytime the page reloads -> calls to users controller

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    return (

      <Router>
        <div>
          <NavBar currentUserId={this.props.currentUserId}/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={UserLogin}/>
            <Route exact path='/signup' component={UserSignup}/>
            <Route exact path='/dashboard' component={Dashboard} currentUserId={this.props.currentUserId} />
            <Route exact path='/albums' component={AlbumsContainer} />
            <Route path='/your-albums' component={UserAlbums} currentUserId={this.props.currentUserId}/>
            {/* <Route path='users/:id/albums'>
              <UserAlbums albums={this.props.albums} currentUserId={this.props.currentUserId}/>
            </Route> */}
            <Route path='/albums/:id'>
              <AlbumDetails />
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: () => {
      dispatch(loginUser())
    },

    getCurrentUser: () => {
      dispatch(getCurrentUser())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
