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
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }


  render() {
    return (
      <div>
         <BrowserRouter>
          <Switch>
            <Route exact path='/' component={}/>
            <Route exact path='/login' component={}/>
            <Route exact path='/signup' component={}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;



// <Router>
      //   <div>
      //     <ul>
      //       <li>
      //         <Link to="/landingpage">Landing Page</Link>
      //       </li>
      //       <li>
      //         <Link to="/">Home</Link>
      //       </li>
      //     </ul>

      //     <NavBar />
      //     <Switch>
      //       <Route path="/signup">
      //         <UserSignup />
      //       </Route>

      //       <Route path="/landingpage">
      //         <LandingPage />
      //       </Route>

      //       <Route path="/home">
      //         <Home />
      //       </Route>

      //       <Route path='/albums'>
      //         <AlbumsContainer />
      //       </Route>

      //       <Route path='/useralbums'>
      //         <UserAlbums />
      //       </Route>

      //     </Switch>

      //   </div>
      // </Router>