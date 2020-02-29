import React from 'react'

const Users = (props) => {


   // users is coming back as undefined because it's prior to the fetch
   // when I try to map over the users array, there's no data yet, so it throws error
   // need to find a way to only run map once the users array is populated with data

   console.log(props.users)

   return (
      <div>
         {props.users.map((user) => <li key={user.id}> Email: {user.attributes.email}</li>
         )}
      </div>
   )
}


export default Users

// {/* <li key={user.attributes.username.toString()}> Username: {user.attributes.username}</li>  */}