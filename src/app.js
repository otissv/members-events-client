/*
* Application entry point
 */

import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from 'routes';
import store from 'store';


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('mount-node')
);
