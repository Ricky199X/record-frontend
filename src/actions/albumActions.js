// all fetch calls related to albums here

export const fetchAlbums = () => {
   return async (dispatch) => {
      dispatch({type: 'LOADING_ALBUMS'})
      fetch('http://localhost:3000/albums', {
         headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
         }, 
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
      })
      .then(resp => resp.json())
      .then(res => dispatch({type: 'SET_ALBUMS', payload: res.data}))
   }
}