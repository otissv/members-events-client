webpackHotUpdate(0,{

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module, React) {/*\n* Application layout\n */\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(202);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(141);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(6);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(142);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(137);\n\nvar _navigationApplication = __webpack_require__(789);\n\nvar _navigationApplication2 = _interopRequireDefault(_navigationApplication);\n\nvar _alertAppplication = __webpack_require__(382);\n\nvar _alertAppplication2 = _interopRequireDefault(_alertAppplication);\n\nvar _notifyAppplication = __webpack_require__(385);\n\nvar _notifyAppplication2 = _interopRequireDefault(_notifyAppplication);\n\nvar _actions = __webpack_require__(87);\n\nvar _actions2 = _interopRequireDefault(_actions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Layout: {\n    displayName: 'Layout'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/home/ninja/work/projects/members-events-client/src/components/application/layout-application.jsx',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/home/ninja/work/projects/members-events-client/src/components/application/layout-application.jsx',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Layout = _wrapComponent('Layout')(function (_React$Component) {\n  _inherits(Layout, _React$Component);\n\n  function Layout() {\n    _classCallCheck(this, Layout);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).apply(this, arguments));\n  }\n\n  _createClass(Layout, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      // this.props.getStorge(['_id', 'token']);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_alertAppplication2.default, null),\n        React.createElement(_notifyAppplication2.default, null),\n        React.createElement(_navigationApplication2.default, null),\n        this.props.children\n      );\n    }\n  }]);\n\n  return Layout;\n}(React.Component));\n\nLayout.propTypes = {\n  isLoggedIn: React.PropTypes.bool,\n  children: React.PropTypes.any,\n  getStorge: React.PropTypes.func\n};\n\nfunction mapStateToProps(state) {\n  return {\n    storage: state.storage,\n    isLoggedIn: state.auth.isLoggedIn\n  };\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, {\n  getStorge: _actions2.default.getStorge\n})(Layout);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)(module), __webpack_require__(6)))\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcGxpY2F0aW9uL2xheW91dC1hcHBsaWNhdGlvbi5qc3g/NTczMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHTTs7Ozs7Ozs7Ozt5Q0FDa0I7Ozs7OzZCQUlaO0FBQ1IsYUFBTzs7O1FBQ0wsc0RBREs7UUFFTCx1REFGSztRQUdMLDBEQUhLO1FBSUgsS0FBSyxLQUFMLENBQVcsUUFBWDtPQUpKLENBRFE7Ozs7U0FMTjtFQUFlLE1BQU0sU0FBTjs7QUFnQnJCLE9BQU8sU0FBUCxHQUFtQjtBQUNqQixjQUFZLE1BQU0sU0FBTixDQUFnQixJQUFoQjtBQUNaLFlBQVUsTUFBTSxTQUFOLENBQWdCLEdBQWhCO0FBQ1YsYUFBVyxNQUFNLFNBQU4sQ0FBZ0IsSUFBaEI7Q0FIYjs7QUFPQSxTQUFTLGVBQVQsQ0FBMEIsS0FBMUIsRUFBaUM7QUFDL0IsU0FBTztBQUNMLGFBQVUsTUFBTSxPQUFOO0FBQ1YsZ0JBQVksTUFBTSxJQUFOLENBQVcsVUFBWDtHQUZkLENBRCtCO0NBQWpDOztrQkFRZSx5QkFBUSxlQUFSLEVBQXlCO0FBQ3RDLGFBQVksa0JBQVEsU0FBUjtDQURDLEVBRVosTUFGWSxFIiwiZmlsZSI6IjM4My5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4qIEFwcGxpY2F0aW9uIGxheW91dFxuICovXG5cbid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL25hdmlnYXRpb24tYXBwbGljYXRpb24uanN4JztcbmltcG9ydCBBbGVydCBmcm9tICcuL2FsZXJ0LWFwcHBsaWNhdGlvbi5qc3gnO1xuaW1wb3J0IE5vdGlmeSBmcm9tICcuL25vdGlmeS1hcHBwbGljYXRpb24uanN4JztcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuXG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIC8vIHRoaXMucHJvcHMuZ2V0U3RvcmdlKFsnX2lkJywgJ3Rva2VuJ10pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxBbGVydC8+XG4gICAgICA8Tm90aWZ5Lz5cbiAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgPC9kaXY+O1xuICB9XG59XG5cblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgaXNMb2dnZWRJbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICBnZXRTdG9yZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyAoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBzdG9yYWdlIDogc3RhdGUuc3RvcmFnZSxcbiAgICBpc0xvZ2dlZEluOiBzdGF0ZS5hdXRoLmlzTG9nZ2VkSW5cbiAgfTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xuICBnZXRTdG9yZ2UgOiBhY3Rpb25zLmdldFN0b3JnZVxufSkoTGF5b3V0KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tcG9uZW50cy9hcHBsaWNhdGlvbi9sYXlvdXQtYXBwbGljYXRpb24uanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})