import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListContainer from './containers/ListContainer'
import './App.css'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/list" component={ListContainer} showList={false} />
        <Route path="/list/:code" component={ListContainer} store={store} showList={true} />
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
