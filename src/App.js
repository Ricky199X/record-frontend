import React from 'react';
import { connect } from 'react-redux'
import UsersContainer from './containers/usersContainer';


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <p>Hello There!</p>
        <UsersContainer />
      </div>
    );
  }
}


export default connect()(App);
