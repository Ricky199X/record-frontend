
const initialState = {
   data: [],
   loading: false
}

export default function albumsReducer(state = initialState, action) {
   switch (action.type) {
      case 'SET_ALBUMS':
         return {loading: false, data: action.payload, selectedAlbum: {}}
      case 'LOADING_ALBUMS':
         return {...state, loading: true}
      case 'LOADING_ALBUM':
         return {...state, loading: true}
      // case 'SELECT_ALBUM':
      //    return {...state, loading: false, selectedAlbum: action.payload} 
      
      default:
         return state
   }
}