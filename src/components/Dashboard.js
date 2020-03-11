import React from 'react'
import { connect } from 'react-redux'
import { getUserAlbums } from '../actions/userActions'
import UserAlbums from './UserAlbums'

class Dashboard extends React.Component {

   constructor(props) {
      super(props)

      this.state = {
         currentUserId: this.props.user.data.id,
         currentUser: this.props.user.data.username,
         currentUserAlbums: this.props.user.user_albums,
         loading: false,

      }
   }

   // set variable for the current_user's id, so that the fetch call knows where to get albums
   // upon sucessful mounting of component, make fetch request to get the user's albums

   componentDidMount() {
      this.props.getUserAlbums(this.state.currentUserId)
   }
   
   // componentDidUpdate() {
   //    console.log(this.state)
   // }
   
   render() {
      console.log(this.state.currentUserAlbums)
      console.log(this.state.currentUser)
      return (
         <div>
            <h4>{`Welcome home, ${this.state.currentUser}!`}</h4>
            <UserAlbums />
         </div>
      )
   }
   
}

const mapStateToProps = ({user, currentUserAlbums}) => {
   return { user, currentUserAlbums }
}


export default connect(mapStateToProps, {getUserAlbums})(Dashboard)