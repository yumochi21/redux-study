import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Root from './components/Root'

const store = createStore(function() { return {} })

render(
  <Root store={store} />,
  document.getElementById('root')
)

console.log(store.getState())
