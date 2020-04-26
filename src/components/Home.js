// Home Screen - provides option to login or signup -> Functional Component

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
   return (
      <div class="homepage-container">
         <div class="homepage-links-container">

            <button class="btn-large">
               <Link to='/signup'>Sign Up</Link>
            </button>



            <button class="btn-large">
               <Link to='/login'>Log In</Link>
            </button>

         </div>
      </div>
   )
}

export default Home