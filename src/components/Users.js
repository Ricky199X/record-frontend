import React from 'react'

const Users = (props) => {

   // users is coming back as undefined because it's prior to the fetch
   // when I try to map over the users array, there's no data yet, so it throws error
   // need to find a way to only run map once the users array is populated with data

   console.log(props.users)

   const mapThruUsers = () => {
      return props.users.map(user => {
         return (
            <div>
               <li key={Math.random()}>Username: {user.attributes.username} </li>
            </div>
         )
      })
   }

   return (
      // console.log(props.users)
      
      <div>
        {mapThruUsers()}
      </div>
   )
}


export default Users

