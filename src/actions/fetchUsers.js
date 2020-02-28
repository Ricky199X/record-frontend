// this is the action creator that fetches user information 

export function fetchUsers(action) {


   return action
   // fetch('http://localhost:3000/users')
   //  .then(resp => resp.json())
   //  .then(data => {
   //    console.log(data)
   // })
}

// what we dispatch is an action object -> to the reducer
// which will then return a new version of our state based on what action we sent