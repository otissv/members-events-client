webpackHotUpdate(0,{

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module, React) {/*\n* Application layout\n */\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(347);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(249);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(8);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(250);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(136);\n\nvar _navigationApplication = __webpack_require__(384);\n\nvar _navigationApplication2 = _interopRequireDefault(_navigationApplication);\n\nvar _alertAppplication = __webpack_require__(382);\n\nvar _alertAppplication2 = _interopRequireDefault(_alertAppplication);\n\nvar _notifyAppplication = __webpack_require__(385);\n\nvar _notifyAppplication2 = _interopRequireDefault(_notifyAppplication);\n\nvar _actions = __webpack_require__(122);\n\nvar _actions2 = _interopRequireDefault(_actions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Layout: {\n    displayName: 'Layout'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/home/ninja/work/projects/members-events-client/src/components/application/layout-application.jsx',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/home/ninja/work/projects/members-events-client/src/components/application/layout-application.jsx',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Layout = _wrapComponent('Layout')(function (_React$Component) {\n  _inherits(Layout, _React$Component);\n\n  function Layout() {\n    _classCallCheck(this, Layout);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).apply(this, arguments));\n  }\n\n  _createClass(Layout, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      this.props.getStorge('_id');\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_alertAppplication2.default, null),\n        React.createElement(_notifyAppplication2.default, null),\n        React.createElement(_navigationApplication2.default, null),\n        this.props.children\n      );\n    }\n  }]);\n\n  return Layout;\n}(React.Component));\n\nLayout.propTypes = {\n  children: React.PropTypes.any\n};\n\nfunction mapStateToProps(state) {\n  return { storage: state.storage };\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, { getStorge: _actions2.default.getStorge })(Layout);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(203)(module), __webpack_require__(8)))\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcGxpY2F0aW9uL2xheW91dC1hcHBsaWNhdGlvbi5qc3g/NTczMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHTTs7Ozs7Ozs7Ozt5Q0FDa0I7QUFDcEIsV0FBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixLQUFyQixFQURvQjs7Ozs2QkFJWjs7QUFFUixhQUFPOzs7UUFDTCxzREFESztRQUVMLHVEQUZLO1FBR0wsMERBSEs7UUFJSCxLQUFLLEtBQUwsQ0FBVyxRQUFYO09BSkosQ0FGUTs7OztTQUxOO0VBQWUsTUFBTSxTQUFOOztBQWdCckIsT0FBTyxTQUFQLEdBQW1CO0FBQ2pCLFlBQVUsTUFBTSxTQUFOLENBQWdCLEdBQWhCO0NBRFo7O0FBS0EsU0FBUyxlQUFULENBQTBCLEtBQTFCLEVBQWlDO0FBQy9CLFNBQU8sRUFBRSxTQUFTLE1BQU0sT0FBTixFQUFsQixDQUQrQjtDQUFqQzs7a0JBSWUseUJBQVEsZUFBUixFQUF5QixFQUFFLFdBQVksa0JBQVEsU0FBUixFQUF2QyxFQUE0RCxNQUE1RCxFIiwiZmlsZSI6IjM4My5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4qIEFwcGxpY2F0aW9uIGxheW91dFxuICovXG5cbid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL25hdmlnYXRpb24tYXBwbGljYXRpb24uanN4JztcbmltcG9ydCBBbGVydCBmcm9tICcuL2FsZXJ0LWFwcHBsaWNhdGlvbi5qc3gnO1xuaW1wb3J0IE5vdGlmeSBmcm9tICcuL25vdGlmeS1hcHBwbGljYXRpb24uanN4JztcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuXG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIHRoaXMucHJvcHMuZ2V0U3RvcmdlKCdfaWQnKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxBbGVydC8+XG4gICAgICA8Tm90aWZ5Lz5cbiAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgIDwvZGl2PjtcbiAgfVxufVxuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLmFueVxufTtcblxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMgKHN0YXRlKSB7XG4gIHJldHVybiB7IHN0b3JhZ2U6IHN0YXRlLnN0b3JhZ2UgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZ2V0U3RvcmdlIDogYWN0aW9ucy5nZXRTdG9yZ2UgfSkoTGF5b3V0KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tcG9uZW50cy9hcHBsaWNhdGlvbi9sYXlvdXQtYXBwbGljYXRpb24uanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})