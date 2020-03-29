import React from 'react'
import { Router } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { history } from 'data/store'
import AppRouter from '../router'

export default function RouterProvider () {
  return <ConnectedRouter history={history}>
    <Router history={history}>
      <AppRouter />
    </Router>
  </ConnectedRouter>
}
