import React from 'react';
import { connect } from 'react-redux'
import {fetchUsers} from './actions/fetchUsers'


class App extends React.Component {


  componentDidMount() {
    this.props.fetchUsers({type: 'FETCH_USERS', payload: {name: 'checking'}})
  }


  render() {
    return (
      <div className="App">
        <p>Hello There!</p>
      </div>
    );
  }
}


export default connect(null, {fetchUsers})(App);
