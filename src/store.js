import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import reducers from './combine-reducers'

export default function configureStore (history) {
  let middleware = applyMiddleware(
    thunk,
    routerMiddleware(history)
  )
  /* Incorporate Redux Dev Tools */
  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension())
    }
  }

  const store = createStore(reducers, middleware)
  return store
}