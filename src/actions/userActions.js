// this is the action creator that CREATES user information, sends it to DB
// thunk is the reason why we have access to the dispatch function

// before every fetch, dispatch an action to the appropriate reducer 
// the reducer will use that to set loading to either true or false
// be very clear on what what's happening - visualize the store 
// both have a data 

export const createUser = (data) => {
   debugger
   return (dispatch) => {
      dispatch({type: 'LOADING_USER'})
      fetch('http://localhost:3000/users', {
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
         mode:'cors',
         method: 'POST',
         credentials: 'include',
         body: JSON.stringify({user: data})
      })
      .then(resp => resp.json())
      .then(user => dispatch({type: 'ADD_USER', payload: user}))
      // debugger
   }
}

// will accept a user object 
export const loginUser = (data) => {
   // debugger
   fetch('http://localhost:3000/login', {
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      },
      mode:'cors',
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({user: data})
   })
}




// what we dispatch is an action object -> to the reducer
// which will then return a new version of our state based on what action we sent

// Backend

// Frontend

// no user -> then sign up event
// sign up event -> get back user
// put user into store
// compnent did update sees user in store 
// if it has a user there, renders a redirct to the dashboard 
// else display the user signup 