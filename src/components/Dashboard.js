import React from 'react'
import { connect } from 'react-redux'
import { getUserAlbums } from '../actions/userActions'
import UserAlbums from './UserAlbums'

class Dashboard extends React.Component {

   constructor(props) {
      super(props)
   }

   // set variable for the current_user's id, so that the fetch call knows where to get albums
   // upon sucessful mounting of component, make fetch request to get the user's albums

   componentDidMount() {
      this.props.getUserAlbums(this.props.user.data.id)
   }
   
   render() {
      // console.log(this.props.user.user_albums.data)
      const currentUser = this.props.user.data.username
      const currentUserAlbums = this.props.user.user_albums

      return (
         <div>
            <h4>{`Welcome home, ${currentUser}!`}</h4>
            <UserAlbums userAlbums={currentUserAlbums}/>
         </div>
      )
   }
   
}

// check if user_albums are undefined prior to rendering anything 
const mapStateToProps = ({user}) => {
   return { user }
}


export default connect(mapStateToProps, {getUserAlbums})(Dashboard)