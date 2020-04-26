// Navbar component: renders a different navbar based on whether you are logged in or not. Functional Component - received props from app.
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../index.css'

const NavBar = (props) => {
   // user login status is passed down as prop to NavBAr
   // if userLoginStatus = false, render a logged out navBar. If true, render the regular navbar
   return props.userLoginStatus === false ?
      (
         <nav class="nav black">
            <div class="nav-wrapper container" >
               <Link to='/' class="brand-logo left-align">Record Collector</Link>
               <ul id="nav-mobile" class="right hide-on-small-and-down ">
                  <li><Link to='/signup'>Sign Up</Link></li>
                  <li><Link to='/login'>Login</Link></li>
               </ul>
            </div>
         </nav>
      )
      :
      (
         <nav class="nav black">
            <div className="nav-wrapper container">
               <Link to='#' class="brand-logo left-align">Record Collector</Link>
               <ul id="nav-mobile" class="right hide-on-small-and-down ">
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/albums">Albums</Link></li>
                  <li><Link to='/logout'>Logout</Link></li>
                  <li><Link to='#' >{props.currentUserName}</Link></li>

               </ul>
            </div>
         </nav>
      )
}

export default withRouter(NavBar)


