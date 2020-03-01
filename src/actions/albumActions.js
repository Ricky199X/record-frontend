// all fetch calls related to albums here

export const fetchAlbums = () => {
   return (dispatch) => {
      dispatch({type: 'LOADING_ALBUMS'})
      fetch('http://localhost:3000/albums')
      .then(resp => resp.json())
      .then(res => dispatch({type: 'SET_ALBUMS', payload: res.data}));
   }
}