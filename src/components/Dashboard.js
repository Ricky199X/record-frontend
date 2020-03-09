import React from 'react'
import { connect } from 'react-redux'
import { getUserAlbums } from '../actions/userActions'
import UserAlbums from './UserAlbums'

class Dashboard extends React.Component {

   constructor(props) {
      super(props)

      this.state = {
         currentUserId: this.props.user.data.id,
         loading: false
      }

   }

   
   // set variable for the current_user's id, so that the fetch call knows where to get albums
   // upon sucessful mounting of component, make fetch request to get the user's albums

   componentDidMount() {
      this.props.getUserAlbums(this.state.currentUserId)
   }
   
   
   render() {
      const { albums, loading } = this.props;
      if (loading) {
         return (
            <h1>Albums Loading</h1>
         )
      } else {
         return (
            <div>
               <UserAlbums />
            </div>
         )
      }
   }
   
}

const mapStateToProps = ({user}) => {
   return { user }
}


export default connect(mapStateToProps, {getUserAlbums})(Dashboard)