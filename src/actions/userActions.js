// this is the action creator that CREATES user information, sends it to DB
// thunk is the reason why we have access to the dispatch function

export const createUser = (data) => {
   // debugger
   return (dispatch) => {
      fetch('http://localhost:3000/users', {
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
         method: 'POST',
         body: JSON.stringify({user: data})
      })
      .then(resp => resp.json())
      .then(user => dispatch({type: 'ADD_USER', payload: user}))
      // debugger
   }
}

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

