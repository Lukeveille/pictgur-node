import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from '../store'
import ConnnectedApp, { App } from '../components/App'

const history = createHistory()
const store = configureStore(history)
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ConnnectedApp />
      </ConnectedRouter>
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div);
});
