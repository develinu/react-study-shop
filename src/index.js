import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

const alertDefaultValue = true;

const reducer2 = (state=alertDefaultValue, action) => {
  if (action.type === "close") {
    return false
  }
  return state
}

const defaultState = [
  {
    id: 0,
    name: '멋진 신발',
    quantity: 7
  },
  {
    id: 1,
    name: '좀 더 멋진 신발',
    quantity: 3
  },
  {
    id: 2,
    name: '매우 멋진 신발',
    quantity: 0
  }
]

const reducer = (state=defaultState, action) => {
  if (action.type === "add") {
    let _state = [...state]
    _state[action.id].quantity++
    return _state
  } else if (action.type === "minus") {
    let _state = [...state]
    _state[action.id].quantity--
    return _state
  } else {
    return state
  }
}

const store = createStore(combineReducers({ reducer, reducer2 }))


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
