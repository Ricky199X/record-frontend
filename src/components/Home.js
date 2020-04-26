// Home Screen - provides option to login or signup -> Functional Component

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
   return (
      <div class="homepage-links-container center">

         <button class="btn-large">
            <Link to='/signup' class="white-text">Sign Up</Link>
         </button>

         <button class="btn-large">
            <Link to='/login' class="white-text">Log In</Link>
         </button>

      </div>
   )
}

export default Home