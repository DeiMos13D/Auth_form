import React, { Component } from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import store from '../redux/index'
import history from '../history'
import StepRoutes from './StepRoutes'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <StepRoutes />
          </ConnectedRouter>
        </Provider>
    )
  }
}

export default App