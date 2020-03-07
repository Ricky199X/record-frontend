import React from 'react';
import { BrowserRouter as Router, Switch , Route, Link } from 'react-router-dom'

import AlbumsContainer from './containers/AlbumsContainer'
import UsersContainer from './containers/UsersContainer'
import NavBar from './components/NavBar';
import UserAlbums from './components/UserAlbums'
import Home from './components/Home'
import AlbumCard from './components/AlbumThumbnail'
// import LandingPage from './components/LandingPage'
import Albums from './components/Albums'
import UserSignup from './components/UserSignup';
import UserLogin from './components/UserLogin'
import Dashboard from './components/Dashboard';



class App extends React.Component {

  render() {
    return (

      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={UserLogin}/>
            <Route exact path='/signup' component={UserSignup}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/albums' component={AlbumsContainer} />
          </Switch>

        </div>
      </Router>
    );
  }
}


export default App;
