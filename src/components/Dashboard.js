import React from 'react'
import { connect } from 'react-redux'
import { getUserAlbums } from '../actions/userActions'
import UserAlbums from './UserAlbums'

class Dashboard extends React.Component {
   
   render() {
      const currentUserId = this.props.user.data.id
      const currentUserAlbums = this.props.user.user_albums
      const isLoggedIn = this.props.user.loggedIn

      // the ternary syntax below evaluates if there is any user loaded - if not, it'll show you that it's not
      // if a user is loaded, it'll display the current user's information, and pass down their user_albums in state and id as props
      // to the userAlbums component, which handles display 
      return !isLoggedIn ?
      (
         <div>
            <h1>Loading!</h1>
         </div>
      )
      :
      (
         <div>
            <UserAlbums albums={currentUserAlbums} currentUserId={currentUserId}/>
         </div>
      )
   }
   
}

const mapStateToProps = ({user}) => {
   return { user }
}


export default connect(mapStateToProps, {getUserAlbums})(Dashboard)