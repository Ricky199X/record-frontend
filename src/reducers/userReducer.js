// this will handle everything related to updating parts of the store that have to do with the user account

// NEVER EVER EVER CHANGE THE DATA TYPES HERE
const initialState = {
   data: {},
   loading: false
}

// set the default state first, action is second argument
export default function userReducer(state = initialState, action) {
   switch (action.type) {
      case 'LOADING_USER':
         return {...state, loading: true}
      case 'ADD_USER':
         return {loading: false, data: action.payload}
      case 'LOGIN_USER':
         return {...state, data: action.payload}
      default:
         return state
   }

}