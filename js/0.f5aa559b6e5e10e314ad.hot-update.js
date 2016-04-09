webpackHotUpdate(0,{

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {/*
	 * Aplication routes
	 */
	'use strict';

	// import LayoutComponent from './components/layout-component';
	// import Child from './components/child-component';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouter = __webpack_require__(84);

	var LayoutComponent = function LayoutComponent(props) {
	  return React.createElement(
	    'div',
	    null,
	    React.createElement(
	      'ul',
	      null,
	      React.createElement(
	        _reactRouter.Link,
	        { to: '/child' },
	        'Child route'
	      )
	    )
	  );
	};

	exports.default = {
	  path: '/',
	  component: LayoutComponent
	  // childRoutes: [{
	  //   component: Child,
	  //   path: '/otis'
	  // }]
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }

})