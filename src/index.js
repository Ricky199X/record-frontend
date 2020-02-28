import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import userReducer from './reducers/userReducer'


// set up devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// set up store
let store = createStore(userReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
   <Provider store={store}> 
      <App />
   </Provider>
, 
document.getElementById('root'));


