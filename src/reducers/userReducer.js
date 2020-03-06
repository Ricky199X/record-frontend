// this will handle everything related to updating parts of the store that have to do with the user account

// NEVER EVER EVER CHANGE THE DATA TYPES HERE
const initialState = {
   data: {},
   loading: false,
   loggedIn: false
}

// set the default state first, action is second argument
export default function userReducer(state = initialState, action) {
   switch (action.type) {
      case 'LOADING_USER':
         return {...state, loading: true, loggedIn: false}
      case 'ADD_USER':
         return {data: action.payload, loading: false, loggedIn: false}
      case 'LOGIN_USER':
         return {...state, data: action.payload, loading: false, loggedIn: true}
      default:
         return state
   }

}