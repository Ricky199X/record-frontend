export default function albumsReducer(state = {data: [], loading: false}, action) {
   switch (action.type) {
      case 'SET_ALBUMS':
         return {loading: false, data: action.payload}
      case 'LOADING_ALBUMS':
         return {...state, loading: true}
      default:
         return state
   }
}