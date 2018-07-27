import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Root from './components/Root'
import './index.css'

const store = createStore(function() { return {} })

render(
  <Root store={store} />,
  document.getElementById('root')
)
