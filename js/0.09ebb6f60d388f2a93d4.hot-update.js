webpackHotUpdate(0,{

/***/ 779:
/***/ function(module, exports, __webpack_require__) {

	eval("/*\n* Authorisation actions\n */\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.signupUser = signupUser;\n\nvar _axios = __webpack_require__(188);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _contants = __webpack_require__(780);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction signupUser(props) {\n  var request = _axios2.default.post(_contants.ROOT_URL + 'register', props);\n\n  return {\n    type: _contants.SIGNUP_USER,\n    payload: request\n  };\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2F1dGgtYWN0aW9ucy5qcz8zYTZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBOzs7OztRQVNnQjs7QUFSaEI7Ozs7QUFFQTs7OztBQU1PLFNBQVMsVUFBVCxDQUFxQixLQUFyQixFQUE0QjtBQUNqQyxNQUFNLFVBQVUsZ0JBQU0sSUFBTixrQ0FBa0MsS0FBbEMsQ0FBVixDQUQyQjs7QUFHakMsU0FBTztBQUNMLCtCQURLO0FBRUwsYUFBUyxPQUFUO0dBRkYsQ0FIaUMiLCJmaWxlIjoiNzc5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiogQXV0aG9yaXNhdGlvbiBhY3Rpb25zXG4gKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7XG4gIFJPT1RfVVJMLFxuICBTSUdOVVBfVVNFUlxufSBmcm9tICcuLi9jb250YW50cyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ251cFVzZXIgKHByb3BzKSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBheGlvcy5wb3N0KGAke1JPT1RfVVJMfXJlZ2lzdGVyYCwgcHJvcHMpO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogU0lHTlVQX1VTRVIsXG4gICAgcGF5bG9hZDogcmVxdWVzdFxuICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hY3Rpb25zL2F1dGgtYWN0aW9ucy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})