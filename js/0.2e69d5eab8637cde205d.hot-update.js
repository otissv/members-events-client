webpackHotUpdate(0,{

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouter = __webpack_require__(35);

	var Navigation = function Navigation(props) {
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

	exports.default = Navigation;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }

})