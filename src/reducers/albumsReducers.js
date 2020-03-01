export default function albumsReducer(state = {data: [], selectedAlbum: null, loading: false}, action) {
   switch (action.type) {
      case 'SET_ALBUMS':
         return {loading: false, data: action.payload}
      case 'LOADING_ALBUMS':
         return {...state, loading: true}
      case 'LOADING_ALBUM':
         return {...state, loading: true}
      case 'SELECT_ALBUM':
         return {loading: false, selectedAlbum: action.payload} 
      default:
         return state
   }
}