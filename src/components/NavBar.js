import React from 'react'


class NavBar extends React.Component {



   render() {
      return (
         <nav>
            <div className="nav-wrapper container">
            <a className="brand-logo">Record Collector</a>
               <ul className= "right">
                  <li>Albums</li>
                  <li>Your Collection</li>
                  <li>Logout</li>
               </ul>
            </div>
         </nav>
      )
   }
}

export default NavBar