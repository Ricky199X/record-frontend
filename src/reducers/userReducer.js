// this will handle everything related to updating parts of the store that have to do with the user account

// NEVER EVER EVER CHANGE THE DATA TYPES HERE
const initialState = {
   data: {},
   loading: false,
   loggedIn: false,
   user_albums: null
}

// set the default state first, action is second argument
export default function userReducer(state = initialState, action) {
   switch (action.type) {
      case 'LOADING_USER':
         return {...state, loading: true, loggedIn: false}
      case 'LOGIN_USER':
         console.log(action.payload)
         return {...state, data: action.payload, loading: false, loggedIn: true}
      case 'ADD_USER_ALBUM':
         return {...state, loading: false, loggedIn: true, user_albums: action.payload}
      case 'SET_USER_ALBUMS':
         return {...state, loading: false, loggedIn: true, user_albums: action.payload}
      case 'SET_CURRENT_USER':
         return {...state, data: action.payload, loading: false, loggedIn: false }
      case 'LOGOUT_USER':
         return {...state}
      default:
         return state
   }

}