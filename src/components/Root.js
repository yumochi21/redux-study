import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ListContainer from './containers/ListContainer'
import './App.css'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path="/list/:code" component={ListContainer} store={store} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
