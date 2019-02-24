import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import * as serviceWorker from './serviceWorker';
import configureStore from './store'
import App from './components/App'
import './styles/index.css'

const history = createHistory()
const store = configureStore(history)
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  rootElement
)

serviceWorker.unregister();