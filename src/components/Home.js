// Home Screen - provides option to login or signup -> Functional Component

import React from 'react'
import { Link } from 'react-router-dom'


// Import image
import LandingPagePic from "..//assets/black-vinyl-player-145707 (2).jpg"

const Home = () => {
   return (
      <div class="homepage-container">

         {/* Landing Page Message */}

         <section class="homepage-message-container center">
            <div class="landing-page-message">
               <h3 class="white-text">
                  Music For Everyone.
               </h3>
            </div>
         </section>

         {/* Landing Pag Image */}
         <section class="homepage-img-container center">
            <div class="img-div">
               <img class="landing-page-pic" src={LandingPagePic} height="400px" width="600px" />
            </div>
         </section>

         {/* Landing Page Links */}
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