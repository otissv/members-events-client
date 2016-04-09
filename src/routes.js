/*
 * Aplication routes
 */
'use strict';

import { Router, IndexRoute, Route } from 'react-router';

import LayoutComponent from './components/layout-component.jsx';
import Page1Component from './components/page-1-component.jsx';
import Page2Component from './components/page-2-component.jsx';

// export default {
//   path: '/',
//   component: LayoutComponent,
//   childRoutes: [
//     { path: '/child', component: ChildComponent }
//   ]
// };


export default (
  <Router path='/' component={LayoutComponent}>
    <IndexRoute component={Page1Component} />
    <Route path='page1' component={Page1Component} />
    <Route path='page2' component={Page2Component} />
  </Router>
);
