// Class Component - It returns a react Element (UserAlbums) and has a render method.
import React from 'react'
import { connect } from 'react-redux'
import UserAlbums from './UserAlbums'

class Dashboard extends React.Component {

   render() {

      const currentUserId = this.props.user.data.id
      const currentUserAlbums = this.props.user.user_albums
      const isLoggedIn = this.props.user.loggedIn

      // the ternary below evaluates if there is any user loaded - if not, it'll show you that it's not
      // if a user is loaded, it'll render the UserAlbums component, and pass down their user_albums in state and user id as props.
      // UserAlbums component is responsible for handling Rendering of user album thumbnails.

      return !isLoggedIn ?
         (
            <div>
               <h1>Loading!</h1>
            </div>
         )
         :
         (
            <div>
               <UserAlbums albums={currentUserAlbums} currentUserId={currentUserId} />
            </div>
         )
   }
}

// We acces the store directly and destructure the user listed in state here, giving the component access to the info in state as props.
const mapStateToProps = ({ user }) => {
   return { user }
}


export default connect(mapStateToProps)(Dashboard)