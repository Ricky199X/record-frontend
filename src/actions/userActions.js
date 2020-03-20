// this is the action creator that CREATES user information, sends it to DB
// thunk is the reason why we have access to the dispatch function

// before every fetch, dispatch an action to the appropriate reducer 
// the reducer will use that to set loading to either true or false
// be very clear on what what's happening - visualize the store 

export const createUser = (data) => {
   // debugger
   return async (dispatch) => {
      dispatch({type: 'LOADING_USER'})
      const response = await fetch('http://localhost:3000/users', {
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
         mode:'cors',
         method: 'POST',
         credentials: 'include',
         body: JSON.stringify({user: data})
      })

      const user_obj = await response.json()
      dispatch({type: 'LOGIN_USER', payload: user_obj})
      dispatch(getUserAlbums(user_obj.id))
   }
}



export const loginUser = (data) => {
   return async (dispatch) => {
      const response = await fetch('http://localhost:3000/login', {
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({user: data})
      })
         const user_obj = await response.json()
   
         dispatch({type: 'LOGIN_USER', payload: user_obj})
         dispatch(getUserAlbums(user_obj.id))
   }
}

// action to add an album to user's albums collection - will take an album object and a user id
export const addUserAlbum = (data, userId) => {
   return async (dispatch) => {
      const response = await fetch(`http://localhost:3000/users/${userId}/user_albums`, {
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({album: data})
      })

      const user_album = await response.json()
      dispatch({type: 'ADD_USER_ALBUM', payload: user_album})
   }
}

// action to get the User's user_albums collection upon successful login, update it in state
export const getUserAlbums = (userId) => {
   return async (dispatch) => {
      const response = await fetch(`http://localhost:3000/users/${userId}/user_albums`, {
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
      })
      const user_albums = await response.json()
      dispatch({type: 'SET_USER_ALBUMS', payload: user_albums})
   }
}

//  WILL WORK ON THIS LATER - NEED TO THIS DELETE USER ALBUM ACTION AT SOME POINT
// export const deleteUserAlbum = (userAlbumId, userId) => {
//    return async (dispatch) => {
//       const response = await fetch(`http://localhost:3000/users/${userId}/user_albums/${userAlbumId}`, {
//          headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//          },
//             mode: 'cors',
//             method: 'DELETE',
//             credentials: 'include',
//             body: JSON.stringify({album: data})
//       })

//       const user_album = await response.json()
//       dispatch({type: 'ADD_USER_ALBUM', payload: user_album})
//    }
// }

export const getUserAlbum = (userId, albumId) => {
   return async () => {
      const response = fetch(`http://localhost:3000/users/${userId}/albums/${albumId}`, {
         headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
         }, 
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
      })
      const user_album = await response.json()
      console.log(user_album)
      return user_album
   }
}


export const getCurrentUser = () => {
   return async (dispatch) => {
      // SETTING LOADING TO TRUE HERE
      dispatch({type: 'LOADING_USER'})
      const response = await fetch('http://localhost:3000/current-user', {
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
      })
         const user_obj = await response.json()
         console.log(user_obj)
         dispatch({type: 'SET_CURRENT_USER', payload: user_obj})
         dispatch(getUserAlbums(user_obj.id))
   }
}

export const logoutUser = () => {
   return async (dispatch) => {
      await fetch('http://localhost:3000/logout', {
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
            mode: 'cors',
            method: 'DELETE',
            credentials: 'include',
      })
      dispatch({type: 'LOGOUT_USER'})
   }
}

// what we dispatch is an action object -> to the reducer
// which will then return a new version of our state based on what action we sent
