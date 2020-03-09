import React from 'react'
import { connect } from 'react-redux'
import { getUserAlbums } from '../actions/userActions'

class Dashboard extends React.Component {

   constructor(props) {
      super(props)

      this.state = {
         currentUserId: this.props.user.data.id
      }

   }

   
   // set variable for the current_user's id, so that the fetch call knows where to get albums
   // upon sucessful mounting of component, make fetch request to get the user's albums

   componentDidMount() {
      console.log(this.state.currentUserId)
      console.log(this.state)
      console.log(this.props)
      this.props.getUserAlbums(this.state.currentUserId)

   }
   
   
   render() {
      return (
         <h4>This is the dashboard</h4>
      )
   }
   
}

const mapStateToProps = ({user}) => {
   return { user }
}


export default connect(mapStateToProps, {getUserAlbums})(Dashboard)