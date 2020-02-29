// this will handle everything related to updating parts of the store that have to do with the user account

// set the default state first, action is second argument
export default function userReducer(state = {users: []}, action) {
   switch (action.type) {
      case 'FETCH_USERS':
         return {users: action.payload}
      case 'ADD_USER':
         console.log(action.payload)
         console.log( {users: [...state.users, action.payload]} )
      default:
         return state
   }

}