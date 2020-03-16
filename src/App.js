import React from 'react';
import { BrowserRouter as Router, Switch , Route, Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser} from './actions/userActions'
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
import LogoutView from './components/LogoutView'



class App extends React.Component {

  // to not lose the currentUser on page refresh: 
  // need a component did mount of getting current user anytime app loads
  // hits end point everytime the page reloads -> calls to users controller

  // state = {
  //   currentUser: this.state.user.data
  // }

  componentDidMount() {
    this.props.getCurrentUser()
    // this.setState({
    //   currentUser: this.props.user.data
    // })
  }


  render() {
    console.log(this.props.state.user.loggedIn)
    let userLoginStatus = this.props.state.user.loggedIn
    return (
      <Router>
        <div>
          <NavBar userLoginStatus={userLoginStatus}/>
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
            <Route exact path='/logout' component={LogoutView}/>
          </Switch>

        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, user) => {
  return { state, user }
}

const mapDispatchToProps = dispatch => {
  return {

    getCurrentUser: () => {
      dispatch(getCurrentUser())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
