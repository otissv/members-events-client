webpackHotUpdate(0,{

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, React, ReactDOM) {'use strict';

	var _redboxReact2 = __webpack_require__(357);

	var _redboxReact3 = _interopRequireDefault(_redboxReact2);

	var _reactTransformCatchErrors3 = __webpack_require__(288);

	var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

	var _react2 = __webpack_require__(7);

	var _react3 = _interopRequireDefault(_react2);

	var _reactTransformHmr3 = __webpack_require__(289);

	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

	var _reactRouter = __webpack_require__(283);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
	  _component: {}
	};

	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/home/ninja/work/projects/members-clinet/src/app.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
	  filename: '/home/ninja/work/projects/members-clinet/src/app.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _redboxReact3.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
	  };
	}

	var HelloMessage = _wrapComponent('_component')(React.createClass({
	  displayName: 'HelloMessage',

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      'Hello ',
	      this.props.name
	    );
	  }
	}));

	var mountNode = document.getElementById('mount-node');

	ReactDOM.render(React.createElement(HelloMessage, null), mountNode);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(155)(module), __webpack_require__(7), __webpack_require__(182)))

/***/ }

})