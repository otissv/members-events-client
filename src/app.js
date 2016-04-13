/*
* Application entry point
 */
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import DevTools from './containers/dev-tools-container.js';
import routes from './routes.js';
import reducers from './reducers';

const store = compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
)(createStore)(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('mount-node')
);
