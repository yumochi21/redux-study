import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Root from './components/Root'
import reducer from './reducers'
import './index.css'

const store = createStore(reducer, applyMiddleware(thunk, logger))

// const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} />,
  document.getElementById('root')
)
