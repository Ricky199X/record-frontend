// this will handle everything related to updating parts of the store that have to do with the user account

const initialState = {
   currentUser: {}
}

// set the default state first, action is second argument
export default function userReducer(state = {data: {}, loading: false}, action) {
   switch (action.type) {
      case 'LOADING_USER':
         return {...state, loading: true}
      case 'ADD_USER':
         return {loading: false, data: action.payload}
      default:
         return state
   }

}