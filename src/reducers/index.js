import userReducer from './userReducer'
import albumsReducer from './albumsReducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({  
   user: userReducer,
   albums: albumsReducer
})


export default rootReducer