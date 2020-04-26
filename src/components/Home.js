// Home Screen - provides option to login or signup -> Functional Component

import React from 'react'
import { Link } from 'react-router-dom'


// Import image
import LandingPagePic from "..//assets/black-vinyl-player-145707 (2).jpg"

const Home = () => {
   return (
      <div class="homepage-container">

         <section class="homepage-img-container center">

            <div class="img-div">
               <img class="landing-page-pic" src={LandingPagePic} />
            </div>


         </section>


         <section class="homepage-links-container center">
            <button class="btn-large green accent-4">
               <Link to='/signup' class="white-text">Sign Up</Link>
            </button>

            <button class="btn-large green accent-4">
               <Link to='/login' class="white-text">Log In</Link>
            </button>
         </section>

      </div >
   )
}

export default Home