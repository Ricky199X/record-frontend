import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {



   render() {
      return (
         <nav>
            <div className="nav-wrapper container">
               <Link to='#' className="brand-logo">Record Collector</Link>
               <ul className = "right">
                  <li><Link to="/signup">Sign Up</Link></li>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/albums">Albums</Link></li>
                  <li><Link to="/user_albums">Your Albums</Link></li>
               </ul>
            </div>
         </nav>
      )  
   }
}

export default NavBar