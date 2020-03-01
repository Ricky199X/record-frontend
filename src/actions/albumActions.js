// all fetch calls related to albums here

export const fetchAlbums = () => {
   return (dispatch) => {
      dispatch({type: 'LOADING_ALBUMS'})
      fetch('http://localhost:3000/albums')
      .then(resp => resp.json())
      .then(res => dispatch({type: 'SET_ALBUMS', payload: res.data}));
   }
}

// export const fetchAlbum = (id) => {
//    return (dispatch) => {
//       dispatch({type: 'LOADING_ALBUM'})
//       fetch(`http://localhost:3000/albums/${id}`)
//       .then(resp => resp.json())
//       .then(res => dispatch({type: 'SELECT_ALBUM', payload: res.data}))
//    }
// }

export function setAlbum(album) {
   return {
      type: "SELECT_ALBUMS",
      payload: album
   }
}