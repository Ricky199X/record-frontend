// this will handle everything related to updating parts of the store that have to do with the user account

const initialState = {
   data: {},
   currentUser: {},
   loading: false
}

// set the default state first, action is second argument
export default function userReducer(state = initialState, action) {
   switch (action.type) {
      case 'LOADING_USER':
         return {...state, loading: true}
      case 'ADD_USER':
         return {loading: false, data: action.payload}
         debugger
      case 'LOGIN_USER':
         return {...state, currentUser: action.payload}
      default:
         return state
   }

}