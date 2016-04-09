webpackHotUpdate(0,{

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {/*
	 * Aplication routes
	 */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouter = __webpack_require__(84);

	var _layoutComponent = __webpack_require__(225);

	var _layoutComponent2 = _interopRequireDefault(_layoutComponent);

	var _childComponent = __webpack_require__(226);

	var _childComponent2 = _interopRequireDefault(_childComponent);

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
	  React.createElement(_reactRouter.IndexRoute, { component: _childComponent2.default }),
	  React.createElement(_reactRouter.Route, { path: 'child', component: _childComponent2.default })
	);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }

})