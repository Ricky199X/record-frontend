// this will handle everything related to updating parts of the store that have to do with the user account

// set the default state first, action is second argument
export default function userReducer(state = {data: {}, loading: false}, action) {
   switch (action.type) {
      case 'LOADING_USER':
         return {...state, loading: true}
      case 'ADD_USER':
         console.log(action.payload)
         return {loading: false, data: action.payload}
      default:
         return state
   }

   // gonna need to checked if I'm logged in 
   // save a token to local storage (google save to local storage, when I get a JWT, if user's not authenticated, make site go to login page )


   // going to need to combine user and album reducers -> each one has their own stores 


}