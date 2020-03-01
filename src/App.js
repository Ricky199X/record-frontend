import React from 'react';
import { connect } from 'react-redux'
import UsersContainer from './containers/UsersContainer';

// components 
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage'
import Albums from './components/Albums'
import UserAlbums from './components/UserAlbums'


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <NavBar />
        <LandingPage/>
      </div>
    );
  }
}


export default App;
