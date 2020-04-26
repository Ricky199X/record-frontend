import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import './index.css'
import 'materialize-css/dist/css/materialize.min.css'



// set up Redux devtools
const composeEnhancer = typeof window === 'object' &&
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

   }) : compose;

const enhancer = composeEnhancer(applyMiddleware(thunk))

// set up store
const store = createStore(rootReducer, enhancer)

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>
   ,
   document.getElementById('root'));


