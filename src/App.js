import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'


// components 
import UsersContainer from './containers/UsersContainer';
import AlbumsContainer from './containers/AlbumsContainer'
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage'
import Albums from './components/Albums'
import UserAlbums from './components/UserAlbums'
import Home from './components/Home'


class App extends React.Component {


  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/albums" exact component={Albums}/>
            <Route path="/user_albums" exact component={UserAlbums} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
