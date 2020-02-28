import React from 'react';
import { connect } from 'react-redux'
import {fetchUsers} from './actions/fetchUsers'


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <p>Hello There!</p>
      </div>
    );
  }
}


export default connect()(App);
