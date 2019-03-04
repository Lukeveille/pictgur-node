import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { reducers } from './reducers'
import { actionWatcher } from './sagas'

export default function configureStore(history) {
  const sagaMiddleware = createSagaMiddleware()
  let middleware = applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history)
  )
  
  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension())
    }
  }

  const store = createStore(reducers, middleware)
  sagaMiddleware.run(actionWatcher)

  return store
}
