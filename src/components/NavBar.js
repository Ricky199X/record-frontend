import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends React.Component {

   render() {
      console.log(this.props)
      // user login status is passed down as prop to NavBAr
      // basic idea is if userLoginStatus = false, render a different navBar. If true, render the regular navbar
      return this.props.userLoginStatus === false ?
      (
         <nav>
            <div className="nav-wrapper container">
               <Link to='/' className="brand-logo">Record Collector</Link>
               <ul className = "right">
                  <li><Link to='/signup'>Sign Up</Link></li>
                  <li><Link to='/login'>Login</Link></li>
               </ul>
            </div>
         </nav>
      )
      :
      (
         <nav>
            <div className="nav-wrapper container">
               <Link to='#' className="brand-logo">Record Collector</Link>
               <ul className = "right">
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/albums">Albums</Link></li>
                  {/* <li><Link to={`users/${this.props.currentUserId}/albums`}>Your Albums</Link></li> */}
                  <li><Link to='/your-albums'>Your Albums</Link></li>
                  <li><Link to='/logout'>Logout</Link></li>
               </ul>
            </div>
         </nav>
      )   
   }
}

export default withRouter(NavBar)


