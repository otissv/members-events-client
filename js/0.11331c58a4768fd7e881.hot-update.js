webpackHotUpdate(0,{

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _navigationComponent = __webpack_require__(228);

	var _navigationComponent2 = _interopRequireDefault(_navigationComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LayoutComponent = function LayoutComponent(props) {
	  return React.createElement(
	    'div',
	    null,
	    React.createElement(NavigationComponet, null),
	    props.children
	  );
	};

	LayoutComponent.propTypes = {
	  children: React.PropTypes.any
	};

	exports.default = LayoutComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {/*
	 * Aplication routes
	 */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouter = __webpack_require__(35);

	var _layoutComponent = __webpack_require__(116);

	var _layoutComponent2 = _interopRequireDefault(_layoutComponent);

	var _page1Component = __webpack_require__(229);

	var _page1Component2 = _interopRequireDefault(_page1Component);

	var _page2Component = __webpack_require__(230);

	var _page2Component2 = _interopRequireDefault(_page2Component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// export default {
	//   path: '/',
	//   component: LayoutComponent,
	//   childRoutes: [
	//     { path: '/child', component: ChildComponent }
	//   ]
	// };

	exports.default = React.createElement(
	  _reactRouter.Router,
	  { path: '/', component: _layoutComponent2.default },
	  React.createElement(_reactRouter.IndexRoute, { component: _page1Component2.default }),
	  React.createElement(_reactRouter.Route, { path: 'child', component: _page1Component2.default }),
	  React.createElement(_reactRouter.Route, { path: 'another-child', component: _page2Component2.default })
	);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouter = __webpack_require__(35);

	var NavigationComponent = function NavigationComponent(props) {
	  return React.createElement(
	    'ul',
	    null,
	    React.createElement(
	      _reactRouter.Link,
	      { to: '/child' },
	      'Child route'
	    ),
	    React.createElement(
	      _reactRouter.Link,
	      { to: '/another-child' },
	      'Another child route'
	    )
	  );
	};

	exports.default = NavigationComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouter = __webpack_require__(35);

	var ChildComponent = function ChildComponent(props) {
	  return React.createElement(
	    'div',
	    null,
	    'Child'
	  );
	};

	exports.default = ChildComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Page2Component = function Page2Component(props) {
	  return React.createElement(
	    'div',
	    null,
	    'Second Page'
	  );
	};

	exports.default = Page2Component;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }

})