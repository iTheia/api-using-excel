import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { createStore } from 'redux'
import rootReducer from './reducers/index'

import './index.scss';
import App from './App';


const persistedState = loadFromLocalStorage()

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


function loadFromLocalStorage (){
  try {
    const serialized = localStorage.getItem('store')
    if (serialized === null) {
      return undefined
    }
    return JSON.parse(serialized)
  } catch (error) {
    
  }
}
function saveToLocalStorage (state){
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('store',serializedState)
  } catch (error) {
    
  }
}