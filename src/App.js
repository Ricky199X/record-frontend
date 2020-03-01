import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


// components 
import UsersContainer from './containers/UsersContainer';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage'
import Albums from './components/Albums'
import UserAlbums from './components/UserAlbums'


class App extends React.Component {


  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <LandingPage/>
        </div>
      </Router>
    );
  }
}


export default App;
