import React from 'react'
import { connect } from 'react-redux'
import { getUserAlbums, getCurrentUser } from '../actions/userActions'
import UserAlbums from './UserAlbums'

class Dashboard extends React.Component {

   // set variable for the current_user's id, so that the fetch call knows where to get albums
   // upon sucessful mounting of component, make fetch request to get the user's albums

   componentDidMount() {
      this.props.getUserAlbums(this.props.currentUserId)
      // this.props.getCurrentUser(this.props.currentUserId)
   }

   // componentDidUpdate(prevState, state) {
   //    // this.props.getCurrentUser()
   //    console.log(prevState)
   //    console.log(state)
   // }
   
   render() {
      const currentUserName = this.props.user.data.username
      const currentUserId = this.props.user.data.id
      const currentUserAlbums = this.props.user.user_albums
      const isLoggedIn = this.props.user.loggedIn

      // the ternary syntax below evaluates if there is any user loaded - if not, it'll show you that it's not
      // if a user is loaded, it'll display the current user's information, and pass down their user_albums in state and id as props
      // to the userAlbums component, which handles display 
      return !isLoggedIn && !currentUserAlbums ?
      (
         <div>
            <h1>You are not logged in yet!</h1>
         </div>
      )
      :
      (
         <div>
            <h4>{`Welcome home, ${currentUserName}!`}</h4>
            <UserAlbums albums={currentUserAlbums} currentUserId={currentUserId}/>
         </div>
      )
   }
   
}

const mapStateToProps = ({user}) => {
   return { user }
}


export default connect(mapStateToProps, {getUserAlbums})(Dashboard)