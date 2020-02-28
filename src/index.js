import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// // set up reducer
// let reducer = ''

// set up devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// set up store
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
   <Provider store={store}> 
      <App />
   </Provider>
, 
document.getElementById('root'));


