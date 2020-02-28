// this is the action creator that fetches user information 

export function fetchUsers() {
   return (dispatch) => {
      fetch('http://localhost:3000/users')
      .then(resp => resp.json())
      .then(users => dispatch({
         type: 'FETCH_USERS',
         payload: users
      }))
   }
}

// what we dispatch is an action object -> to the reducer
// which will then return a new version of our state based on what action we sent