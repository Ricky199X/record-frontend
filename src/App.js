import React from 'react';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser} from './actions/userActions'
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
            <Route exact path='/albums' component={AlbumsContainer} />
            <Route path='/your-albums' component={Dashboard} currentUserId={this.props.currentUserId} />

            <Route path='/albums/:id'>
              <AlbumDetails />
            </Route> 

            <Route path='/users/:id/user_albums/:id'>
              <UserAlbumDetails userLoginStatus={userLoginStatus}/>
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

const mapDispatchToProps = dispatch => {
  return {

    getCurrentUser: () => {
      dispatch(getCurrentUser())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
