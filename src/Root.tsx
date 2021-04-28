import React, { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { Router, Switch, Route } from 'react-router-dom'
import { Spinner } from 'components/common'
import { history } from 'utils'
import App from './App'
import configureStore from './store'

const store = configureStore()

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Suspense fallback={<Spinner />}>
          <Route path='/' component={App} />
        </Suspense>
      </Router>
    </Provider>
  )
}

export default Root
