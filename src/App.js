import React from 'react';
import { connect } from 'react-redux'
import UsersContainer from './containers/UsersContainer';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage'


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
