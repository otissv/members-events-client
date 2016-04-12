webpackHotUpdate(0,{

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module, React) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(208);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(147);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(6);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(148);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reduxForm = __webpack_require__(213);\n\nvar _actions = __webpack_require__(89);\n\nvar _actions2 = _interopRequireDefault(_actions);\n\nvar _reactRouter = __webpack_require__(74);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Signup: {\n    displayName: 'Signup'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/home/ninja/work/projects/members-events-client/src/components/auth/signup-auth.jsx',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/home/ninja/work/projects/members-events-client/src/components/auth/signup-auth.jsx',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Signup = _wrapComponent('Signup')(function (_React$Component) {\n  _inherits(Signup, _React$Component);\n\n  function Signup() {\n    _classCallCheck(this, Signup);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(Signup).apply(this, arguments));\n  }\n\n  _createClass(Signup, [{\n    key: 'onSubmit',\n    value: function onSubmit(props) {\n      var _this2 = this;\n\n      var _props = this.props;\n      var register = _props.register;\n      var setStorage = _props.setStorage;\n      var loggedIn = _props.loggedIn;\n\n\n      register(props).payload.then(function (responce) {\n        return responce;\n      }).then(function (responce) {\n        // redirect to home\n        _this2.context.router.push('/');\n\n        var _responce$data$result = responce.data.result;\n        var _id = _responce$data$result._id;\n        var token = _responce$data$result.token;\n\n        setStorage({ _id: _id, token: token });\n        loggedIn(true);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props2 = this.props;\n      var _props2$fields = _props2.fields;\n      var username = _props2$fields.username;\n      var password = _props2$fields.password;\n      var handleSubmit = _props2.handleSubmit;\n\n      return React.createElement(\n        'form',\n        { className: 'uk-form uk-form-stacked', onSubmit: handleSubmit(this.onSubmit.bind(this)) },\n        React.createElement(\n          'h3',\n          null,\n          'Sign in'\n        ),\n        React.createElement(\n          'div',\n          { className: 'uk-form-row' },\n          React.createElement(\n            'label',\n            { className: 'uk-form-label' },\n            'Username'\n          ),\n          React.createElement(\n            'div',\n            { className: 'uk-form-controls' },\n            React.createElement('input', _extends({ type: 'text',\n              className: 'form-group ' + (username.touched && username.invalid ? 'uk-form-danger' : '')\n            }, username))\n          ),\n          React.createElement(\n            'div',\n            { className: 'text-help' },\n            username.touched ? username.error : ''\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'uk-form-row' },\n          React.createElement(\n            'label',\n            { className: 'uk-form-label' },\n            'password'\n          ),\n          React.createElement(\n            'div',\n            { className: 'uk-form-controls' },\n            React.createElement('input', _extends({ type: 'password',\n              className: 'form-group ' + (password.touched && password.invalid ? 'uk-form-danger' : '')\n            }, password))\n          ),\n          React.createElement(\n            'div',\n            { className: 'text-help' },\n            password.touched ? password.error : ''\n          )\n        ),\n        React.createElement(\n          'button',\n          { type: 'submit', className: 'btn btn-primary' },\n          'Sign in'\n        ),\n        React.createElement(\n          _reactRouter.Link,\n          { to: '/', className: 'btn btn-danger' },\n          'Cancel'\n        )\n      );\n    }\n  }]);\n\n  return Signup;\n}(React.Component));\n\nSignup.contextTypes = {\n  router: React.PropTypes.object\n};\n\n// Vaidate proptypes\nSignup.propTypes = {\n  fields: React.PropTypes.object,\n  loggedIn: React.PropTypes.func,\n  handleSubmit: React.PropTypes.func,\n  register: React.PropTypes.func,\n  setStorage: React.PropTypes.func\n};\n\nfunction validate(values) {\n  var errors = {};\n\n  if (!values.username) {\n    errors.username = 'Enter a username';\n  }\n\n  if (!values.password) {\n    errors.password = 'Enter a password';\n  }\n\n  return errors;\n}\n\n// connet: 1st argument is mapStateToProps, 2nd is mapDispatchToProps\n// reduxForm: 1st is form config, 2nd argument is mapStateToProps, 3rd is mapDispatchToProps\nexports.default = (0, _reduxForm.reduxForm)({\n  form: 'SigninForm',\n  fields: ['username', 'password'],\n  validate: validate\n}, null, {\n  loggedIn: _actions2.default.setStorage,\n  register: _actions2.default.register,\n  setStorage: _actions2.default.setStorage\n})(Signup);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)(module), __webpack_require__(6)))\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvc2lnbnVwLWF1dGguanN4PzQ0YzgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdNOzs7Ozs7Ozs7OzZCQUVNLE9BQU87OzttQkFDNEIsS0FBSyxLQUFMLENBRDVCO1VBQ1AsMkJBRE87VUFDRywrQkFESDtVQUNlLDJCQURmOzs7QUFHZixlQUFTLEtBQVQsRUFBZ0IsT0FBaEIsQ0FDRyxJQURILENBQ1E7ZUFBWTtPQUFaLENBRFIsQ0FFRyxJQUZILENBRVEsb0JBQVk7O0FBRWhCLGVBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsSUFBcEIsQ0FBeUIsR0FBekIsRUFGZ0I7O29DQUlPLFNBQVMsSUFBVCxDQUFjLE1BQWQsQ0FKUDtZQUlSLGdDQUpRO1lBSUgsb0NBSkc7O0FBS2hCLG1CQUFXLEVBQUUsUUFBRixFQUFPLFlBQVAsRUFBWCxFQUxnQjtBQU1oQixpQkFBUyxJQUFULEVBTmdCO09BQVosQ0FGUixDQUhlOzs7OzZCQWdCUDtvQkFDaUQsS0FBSyxLQUFMLENBRGpEO21DQUNBLE9BREE7VUFDVSxtQ0FEVjtVQUNvQixtQ0FEcEI7VUFDZ0Msb0NBRGhDOztBQUVSLGFBQU87O1VBQU0sV0FBVSx5QkFBVixFQUFvQyxVQUFVLGFBQWEsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixJQUFuQixDQUFiLENBQVYsRUFBMUM7UUFDTDs7OztTQURLO1FBRUw7O1lBQUssV0FBVSxhQUFWLEVBQUw7VUFDRTs7Y0FBTyxXQUFVLGVBQVYsRUFBUDs7V0FERjtVQUVFOztjQUFLLFdBQVUsa0JBQVYsRUFBTDtZQUNFLHdDQUFPLE1BQUssTUFBTDtBQUNMLDBDQUF5QixTQUFTLE9BQVQsSUFBb0IsU0FBUyxPQUFULEdBQW1CLGdCQUF2QyxHQUEwRCxFQUExRCxDQUF6QjtlQUNJLFNBRk4sQ0FERjtXQUZGO1VBU0U7O2NBQUssV0FBVSxXQUFWLEVBQUw7WUFDQyxTQUFTLE9BQVQsR0FBbUIsU0FBUyxLQUFULEdBQWlCLEVBQXBDO1dBVkg7U0FGSztRQWdCTDs7WUFBSyxXQUFVLGFBQVYsRUFBTDtVQUNFOztjQUFPLFdBQVUsZUFBVixFQUFQOztXQURGO1VBRUU7O2NBQUssV0FBVSxrQkFBVixFQUFMO1lBQ0Usd0NBQU8sTUFBSyxVQUFMO0FBQ0wsMENBQXlCLFNBQVMsT0FBVCxJQUFvQixTQUFTLE9BQVQsR0FBbUIsZ0JBQXZDLEdBQTBELEVBQTFELENBQXpCO2VBQ0ksU0FGTixDQURGO1dBRkY7VUFTRTs7Y0FBSyxXQUFVLFdBQVYsRUFBTDtZQUNDLFNBQVMsT0FBVCxHQUFtQixTQUFTLEtBQVQsR0FBaUIsRUFBcEM7V0FWSDtTQWhCSztRQThCTDs7WUFBUSxNQUFLLFFBQUwsRUFBYyxXQUFVLGlCQUFWLEVBQXRCOztTQTlCSztRQWdDTDs7WUFBTSxJQUFHLEdBQUgsRUFBTyxXQUFVLGdCQUFWLEVBQWI7O1NBaENLO09BQVAsQ0FGUTs7OztTQWxCTjtFQUFlLE1BQU0sU0FBTjs7QUEwRHJCLE9BQU8sWUFBUCxHQUFzQjtBQUNwQixVQUFRLE1BQU0sU0FBTixDQUFnQixNQUFoQjtDQURWOzs7QUFLQSxPQUFPLFNBQVAsR0FBbUI7QUFDakIsVUFBUSxNQUFNLFNBQU4sQ0FBZ0IsTUFBaEI7QUFDUixZQUFVLE1BQU0sU0FBTixDQUFnQixJQUFoQjtBQUNWLGdCQUFjLE1BQU0sU0FBTixDQUFnQixJQUFoQjtBQUNkLFlBQVUsTUFBTSxTQUFOLENBQWdCLElBQWhCO0FBQ1YsY0FBWSxNQUFNLFNBQU4sQ0FBZ0IsSUFBaEI7Q0FMZDs7QUFTQSxTQUFTLFFBQVQsQ0FBbUIsTUFBbkIsRUFBMkI7QUFDekIsTUFBTSxTQUFTLEVBQVQsQ0FEbUI7O0FBR3pCLE1BQUksQ0FBQyxPQUFPLFFBQVAsRUFBaUI7QUFDcEIsV0FBTyxRQUFQLEdBQWtCLGtCQUFsQixDQURvQjtHQUF0Qjs7QUFJQSxNQUFJLENBQUMsT0FBTyxRQUFQLEVBQWlCO0FBQ3BCLFdBQU8sUUFBUCxHQUFrQixrQkFBbEIsQ0FEb0I7R0FBdEI7O0FBSUEsU0FBTyxNQUFQLENBWHlCO0NBQTNCOzs7O2tCQWdCZSwwQkFDYjtBQUNFLFFBQU0sWUFBTjtBQUNBLFVBQVEsQ0FBRSxVQUFGLEVBQWMsVUFBZCxDQUFSO0FBQ0Esb0JBSEY7Q0FEYSxFQU1iLElBTmEsRUFPYjtBQUNFLFlBQVUsa0JBQVEsVUFBUjtBQUNWLFlBQVcsa0JBQVEsUUFBUjtBQUNYLGNBQVksa0JBQVEsVUFBUjtDQVZELEVBWWIsTUFaYSxFIiwiZmlsZSI6IjQwOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5cbmNsYXNzIFNpZ251cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xuXG4gIG9uU3VibWl0IChwcm9wcykge1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIHNldFN0b3JhZ2UsIGxvZ2dlZEluIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmVnaXN0ZXIocHJvcHMpLnBheWxvYWRcbiAgICAgIC50aGVuKHJlc3BvbmNlID0+IHJlc3BvbmNlKVxuICAgICAgLnRoZW4ocmVzcG9uY2UgPT4ge1xuICAgICAgICAvLyByZWRpcmVjdCB0byBob21lXG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucHVzaCgnLycpO1xuXG4gICAgICAgIGNvbnN0IHsgX2lkLCB0b2tlbiB9ID0gcmVzcG9uY2UuZGF0YS5yZXN1bHQ7XG4gICAgICAgIHNldFN0b3JhZ2UoeyBfaWQsIHRva2VuIH0pO1xuICAgICAgICBsb2dnZWRJbih0cnVlKTtcbiAgICAgIH0pO1xuICB9XG5cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgZmllbGRzOiB7IHVzZXJuYW1lLCBwYXNzd29yZCB9LCBoYW5kbGVTdWJtaXQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxmb3JtIGNsYXNzTmFtZT1cInVrLWZvcm0gdWstZm9ybS1zdGFja2VkXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCh0aGlzLm9uU3VibWl0LmJpbmQodGhpcykpfT5cbiAgICAgIDxoMz5TaWduIGluPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstZm9ybS1yb3dcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInVrLWZvcm0tbGFiZWxcIiA+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWZvcm0tY29udHJvbHNcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tZ3JvdXAgJHt1c2VybmFtZS50b3VjaGVkICYmIHVzZXJuYW1lLmludmFsaWQgPyAndWstZm9ybS1kYW5nZXInIDogJyd9YH1cbiAgICAgICAgICAgIHsuLi51c2VybmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1oZWxwJz5cbiAgICAgICAge3VzZXJuYW1lLnRvdWNoZWQgPyB1c2VybmFtZS5lcnJvciA6ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWZvcm0tcm93XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ1ay1mb3JtLWxhYmVsXCIgPnBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1mb3JtLWNvbnRyb2xzXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1ncm91cCAke3Bhc3N3b3JkLnRvdWNoZWQgJiYgcGFzc3dvcmQuaW52YWxpZCA/ICd1ay1mb3JtLWRhbmdlcicgOiAnJ31gfVxuICAgICAgICAgICAgey4uLnBhc3N3b3JkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWhlbHAnPlxuICAgICAgICB7cGFzc3dvcmQudG91Y2hlZCA/IHBhc3N3b3JkLmVycm9yIDogJyd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSc+U2lnbiBpbjwvYnV0dG9uPlxuXG4gICAgICA8TGluayB0bz0nLycgY2xhc3NOYW1lPSdidG4gYnRuLWRhbmdlcic+Q2FuY2VsPC9MaW5rPlxuICAgIDwvZm9ybT47XG4gIH1cbn1cblxuXG5TaWdudXAuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn07XG5cbi8vIFZhaWRhdGUgcHJvcHR5cGVzXG5TaWdudXAucHJvcFR5cGVzID0ge1xuICBmaWVsZHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIGxvZ2dlZEluOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgaGFuZGxlU3VibWl0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgcmVnaXN0ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBzZXRTdG9yYWdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxuXG5mdW5jdGlvbiB2YWxpZGF0ZSAodmFsdWVzKSB7XG4gIGNvbnN0IGVycm9ycyA9IHt9O1xuXG4gIGlmICghdmFsdWVzLnVzZXJuYW1lKSB7XG4gICAgZXJyb3JzLnVzZXJuYW1lID0gJ0VudGVyIGEgdXNlcm5hbWUnO1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMucGFzc3dvcmQpIHtcbiAgICBlcnJvcnMucGFzc3dvcmQgPSAnRW50ZXIgYSBwYXNzd29yZCc7XG4gIH1cblxuICByZXR1cm4gZXJyb3JzO1xufVxuXG4vLyBjb25uZXQ6IDFzdCBhcmd1bWVudCBpcyBtYXBTdGF0ZVRvUHJvcHMsIDJuZCBpcyBtYXBEaXNwYXRjaFRvUHJvcHNcbi8vIHJlZHV4Rm9ybTogMXN0IGlzIGZvcm0gY29uZmlnLCAybmQgYXJndW1lbnQgaXMgbWFwU3RhdGVUb1Byb3BzLCAzcmQgaXMgbWFwRGlzcGF0Y2hUb1Byb3BzXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm0oXG4gIHtcbiAgICBmb3JtOiAnU2lnbmluRm9ybScsXG4gICAgZmllbGRzOiBbICd1c2VybmFtZScsICdwYXNzd29yZCcgXSxcbiAgICB2YWxpZGF0ZVxuICB9LFxuICBudWxsLFxuICB7XG4gICAgbG9nZ2VkSW46IGFjdGlvbnMuc2V0U3RvcmFnZSxcbiAgICByZWdpc3RlciA6IGFjdGlvbnMucmVnaXN0ZXIsXG4gICAgc2V0U3RvcmFnZTogYWN0aW9ucy5zZXRTdG9yYWdlXG4gIH1cbikoU2lnbnVwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tcG9uZW50cy9hdXRoL3NpZ251cC1hdXRoLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})