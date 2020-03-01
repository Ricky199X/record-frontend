import React from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'

import AlbumsContainer from './containers/AlbumsContainer'
import NavBar from './components/NavBar';
import UserAlbums from './components/UserAlbums'
import Home from './components/Home'
import AlbumCard from './components/AlbumCard'


class App extends React.Component {


  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/albums" exact component={AlbumsContainer}/>
            <Route path="/user_albums" exact component={UserAlbums} />
            <Route path="/" exact component={Home} />
            <Route path="/albums/:id" exact component={AlbumCard} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
