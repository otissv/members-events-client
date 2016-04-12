webpackHotUpdate(0,{

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module, React) {/*\n* Application layout\n */\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(208);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(147);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(6);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(148);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(143);\n\nvar _loggedInApplication = __webpack_require__(881);\n\nvar _loggedInApplication2 = _interopRequireDefault(_loggedInApplication);\n\nvar _NoLoggedInApplication = __webpack_require__(880);\n\nvar _NoLoggedInApplication2 = _interopRequireDefault(_NoLoggedInApplication);\n\nvar _alertAppplication = __webpack_require__(404);\n\nvar _alertAppplication2 = _interopRequireDefault(_alertAppplication);\n\nvar _notifyAppplication = __webpack_require__(407);\n\nvar _notifyAppplication2 = _interopRequireDefault(_notifyAppplication);\n\nvar _actions = __webpack_require__(89);\n\nvar _actions2 = _interopRequireDefault(_actions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Layout: {\n    displayName: 'Layout'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/home/ninja/work/projects/members-events-client/src/components/application/layout-application.jsx',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/home/ninja/work/projects/members-events-client/src/components/application/layout-application.jsx',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Layout = _wrapComponent('Layout')(function (_React$Component) {\n  _inherits(Layout, _React$Component);\n\n  function Layout() {\n    _classCallCheck(this, Layout);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).apply(this, arguments));\n  }\n\n  _createClass(Layout, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      this.props.getStorge(['_id', 'token']);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      console.log(this.props.loggedIn());\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_alertAppplication2.default, null),\n        React.createElement(_notifyAppplication2.default, null),\n        this.props.loggedIn() ? React.createElement(_loggedInApplication2.default, null) : React.createElement(_NoLoggedInApplication2.default, null),\n        this.props.children\n      );\n    }\n  }]);\n\n  return Layout;\n}(React.Component));\n\nLayout.propTypes = {\n  // loggedIn: React.PropTypes.bool,\n  children: React.PropTypes.any,\n  getStorge: React.PropTypes.func\n};\n\nfunction mapStateToProps(state) {\n  return {\n    storage: state.storage\n  };\n}\n\n// loggedIn: state.loggedIn\nexports.default = (0, _reactRedux.connect)(mapStateToProps, {\n  getStorge: _actions2.default.getStorge,\n  loggedIn: _actions2.default.loggedIn\n})(Layout);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)(module), __webpack_require__(6)))\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcGxpY2F0aW9uL2xheW91dC1hcHBsaWNhdGlvbi5qc3g/NTczMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdNOzs7Ozs7Ozs7O3lDQUNrQjtBQUNwQixXQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLENBQUMsS0FBRCxFQUFRLE9BQVIsQ0FBckIsRUFEb0I7Ozs7NkJBSVo7QUFDUixjQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQVosRUFEUTtBQUVSLGFBQU87OztRQUNMLHNEQURLO1FBRUwsdURBRks7UUFHSCxLQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLHdEQUF4QixHQUFzQywwREFBdEM7UUFDQSxLQUFLLEtBQUwsQ0FBVyxRQUFYO09BSkosQ0FGUTs7OztTQUxOO0VBQWUsTUFBTSxTQUFOOztBQWlCckIsT0FBTyxTQUFQLEdBQW1COztBQUVqQixZQUFVLE1BQU0sU0FBTixDQUFnQixHQUFoQjtBQUNWLGFBQVcsTUFBTSxTQUFOLENBQWdCLElBQWhCO0NBSGI7O0FBT0EsU0FBUyxlQUFULENBQTBCLEtBQTFCLEVBQWlDO0FBQy9CLFNBQU87QUFDTCxhQUFVLE1BQU0sT0FBTjtHQURaLENBRCtCO0NBQWpDOzs7a0JBT2UseUJBQVEsZUFBUixFQUF5QjtBQUN0QyxhQUFZLGtCQUFRLFNBQVI7QUFDWixZQUFXLGtCQUFRLFFBQVI7Q0FGRSxFQUdaLE1BSFksRSIsImZpbGUiOiI0MDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuKiBBcHBsaWNhdGlvbiBsYXlvdXRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IExvZ2dlZEluIGZyb20gJy4vbG9nZ2VkSW4tYXBwbGljYXRpb24uanN4JztcbmltcG9ydCBOb3RMb2dnZWRJbiBmcm9tICcuL05vTG9nZ2VkSW4tYXBwbGljYXRpb24uanN4JztcbmltcG9ydCBBbGVydCBmcm9tICcuL2FsZXJ0LWFwcHBsaWNhdGlvbi5qc3gnO1xuaW1wb3J0IE5vdGlmeSBmcm9tICcuL25vdGlmeS1hcHBwbGljYXRpb24uanN4JztcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuXG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIHRoaXMucHJvcHMuZ2V0U3RvcmdlKFsnX2lkJywgJ3Rva2VuJ10pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmxvZ2dlZEluKCkpO1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgPEFsZXJ0Lz5cbiAgICAgIDxOb3RpZnkvPlxuICAgICAgeyB0aGlzLnByb3BzLmxvZ2dlZEluKCkgPyA8TG9nZ2VkSW4vPiA6IDxOb3RMb2dnZWRJbi8+IH1cbiAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgPC9kaXY+O1xuICB9XG59XG5cblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgLy8gbG9nZ2VkSW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgZ2V0U3RvcmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMgKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgc3RvcmFnZSA6IHN0YXRlLnN0b3JhZ2UsXG4gICAgLy8gbG9nZ2VkSW46IHN0YXRlLmxvZ2dlZEluXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XG4gIGdldFN0b3JnZSA6IGFjdGlvbnMuZ2V0U3RvcmdlLFxuICBsb2dnZWRJbiA6IGFjdGlvbnMubG9nZ2VkSW5cbn0pKExheW91dCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvYXBwbGljYXRpb24vbGF5b3V0LWFwcGxpY2F0aW9uLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})