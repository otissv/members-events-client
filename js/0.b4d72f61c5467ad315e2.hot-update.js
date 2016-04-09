webpackHotUpdate(0,{

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
	  React.createElement(_reactRouter.Route, { path: 'page1', component: _page1Component2.default }),
	  React.createElement(_reactRouter.Route, { path: 'page2', component: _page2Component2.default })
	);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }

})