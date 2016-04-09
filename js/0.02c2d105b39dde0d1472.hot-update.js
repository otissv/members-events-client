webpackHotUpdate(0,{

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
	    ),
	    props.children
	  );
	};

	exports.default = LayoutComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }

})