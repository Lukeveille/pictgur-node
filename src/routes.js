import App from './components/App.jsx'
import { Route } from 'react-router'
import React from 'react'
const routes = (
  <div>
    <Route exact path="/" component={App} />
    <Route exact path="/gallery" component={App} />
  </div>
)
export default routes
