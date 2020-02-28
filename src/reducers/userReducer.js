// this will handle everything related to updating parts of the store that have to do with the user account

// set the default state first, action is second argument
export default function userReducer(state = {users: []}, action) {

   return action.payload
   // this was just to see that our action was coming in correct
   // and that store could be properly updated by the reducer

}