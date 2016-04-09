/*
* Application entry point
 */
import { Router } from 'react-router';
import routes from './routes.js';
import { browserHistory } from 'react-router';

const mountNode = document.getElementById('mount-node');

ReactDOM.render(
  <Router history={browserHistory} routes={routes}/>,
  mountNode
);
