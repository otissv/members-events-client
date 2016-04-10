webpackHotUpdate(0,{

/***/ 779:
/***/ function(module, exports, __webpack_require__) {

	eval("/*\n* Authorisation actions\n */\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.register = register;\n\nvar _axios = __webpack_require__(188);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _contants = __webpack_require__(780);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction register(props) {\n  var request = _axios2.default.post(_contants.ROOT_URL + 'register', props);\n\n  return {\n    type: _contants.REGISTER,\n    payload: request\n  };\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2F1dGgtYWN0aW9ucy5qcz8zYTZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBOzs7OztRQVNnQjs7QUFSaEI7Ozs7QUFFQTs7OztBQU1PLFNBQVMsUUFBVCxDQUFtQixLQUFuQixFQUEwQjtBQUMvQixNQUFNLFVBQVUsZ0JBQU0sSUFBTixrQ0FBa0MsS0FBbEMsQ0FBVixDQUR5Qjs7QUFHL0IsU0FBTztBQUNMLDRCQURLO0FBRUwsYUFBUyxPQUFUO0dBRkYsQ0FIK0IiLCJmaWxlIjoiNzc5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiogQXV0aG9yaXNhdGlvbiBhY3Rpb25zXG4gKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7XG4gIFJPT1RfVVJMLFxuICBSRUdJU1RFUlxufSBmcm9tICcuLi9jb250YW50cyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyIChwcm9wcykge1xuICBjb25zdCByZXF1ZXN0ID0gYXhpb3MucG9zdChgJHtST09UX1VSTH1yZWdpc3RlcmAsIHByb3BzKTtcblxuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFR0lTVEVSLFxuICAgIHBheWxvYWQ6IHJlcXVlc3RcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYWN0aW9ucy9hdXRoLWFjdGlvbnMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})