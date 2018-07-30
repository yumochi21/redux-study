import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Root from './components/Root'
import reducer from './reducers'
import './index.css'

const store = createStore(reducer)

// const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} />,
  document.getElementById('root')
)
