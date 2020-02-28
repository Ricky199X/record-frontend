import React from 'react';
import { connect } from 'react-redux'
import UsersContainer from './containers/UsersContainer';


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


export default App;
