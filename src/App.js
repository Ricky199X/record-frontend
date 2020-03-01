import React from 'react';
import { BrowserRouter as Router, Switch , Route, Link } from 'react-router-dom'

import AlbumsContainer from './containers/AlbumsContainer'
import UsersContainer from './containers/UsersContainer'
import NavBar from './components/NavBar';
import UserAlbums from './components/UserAlbums'
import Home from './components/Home'
import AlbumCard from './components/AlbumCard'
import LandingPage from './components/LandingPage'
import Albums from './components/Albums'
import UserSignup from './components/UserSignup';



class App extends React.Component {


  render() {
    return (
      // <Router>
      //   <div className="App">
      //     <NavBar />
      //     <LandingPage />
      //     <Switch>
      //       {/* <Route path="/landing_page" exact component={LandingPage} /> */}
      //       <Route path="/albums" exact component={AlbumsContainer}/>
      //       <Route path="/user_albums" exact component={UserAlbums} />
      //       {/* <Route path="/" exact component={Home} /> */}
      //       <Route path="/albums/:id" exact component={AlbumCard} />
      //     </Switch>
      //   </div>
      // </Router>

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/landingpage">Landing Page</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>

          <NavBar />
          <Switch>
            <Route path="/signup">
              <UserSignup />
            </Route>

            <Route path="/landingpage">
              <LandingPage />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path='/albums'>
              <AlbumsContainer />
            </Route>

            <Route path='/useralbums'>
              <UserAlbums />
            </Route>

          </Switch>

        </div>
      </Router>
    );
  }
}


export default App;
