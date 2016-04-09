webpackHotUpdate(0,{

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Aplication routes
	 */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _layoutComponent = __webpack_require__(225);

	var _layoutComponent2 = _interopRequireDefault(_layoutComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import Child from './components/child-component';

	exports.default = {
	  path: '/',
	  component: _layoutComponent2.default
	  // childRoutes: [{
	  //   component: Child,
	  //   path: '/otis'
	  // }]
	};

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

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

	exports.default = LayoutComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }

})