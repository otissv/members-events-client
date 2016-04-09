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

	var _childComponent = __webpack_require__(226);

	var _childComponent2 = _interopRequireDefault(_childComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  path: '/',
	  component: _layoutComponent2.default,
	  childRoutes: [{ path: '/child', component: _childComponent2.default }]
	};

/***/ }

})