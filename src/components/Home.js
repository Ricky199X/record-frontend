// Home Screen - provides option to login or signup -> Functional Component

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
   return (
      <div>
         <Link to='/login'>Log In</Link>
         <br></br>
         <Link to='/signup'>Sign Up</Link>
      </div>
   )

}

export default Home