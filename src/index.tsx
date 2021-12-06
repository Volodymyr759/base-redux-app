import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';
import { store } from './store/store';
import reportWebVitals from './reportWebVitals';
import { forbiddenWordsMiddleware } from './store/middleware';

const appStore = createStore(store, compose(
  applyMiddleware(thunk, forbiddenWordsMiddleware),
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
