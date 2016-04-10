webpackHotUpdate(0,{

/***/ 779:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.signupUser = signupUser;\n\nvar _axios = __webpack_require__(188);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _contants = __webpack_require__(780);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction signupUser(props) {\n  var request = _axios2.default.post(_contants.ROOT_URL + 'register', props);\n\n  return {\n    type: _contants.SIGNUP_USER,\n    payload: request\n  };\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2F1dGgtYWN0aW9ucy5qcz8zYTZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztRQVNnQjs7QUFSaEI7Ozs7QUFFQTs7OztBQU1PLFNBQVMsVUFBVCxDQUFxQixLQUFyQixFQUE0QjtBQUNqQyxNQUFNLFVBQVUsZ0JBQU0sSUFBTixrQ0FBa0MsS0FBbEMsQ0FBVixDQUQyQjs7QUFHakMsU0FBTztBQUNMLCtCQURLO0FBRUwsYUFBUyxPQUFUO0dBRkYsQ0FIaUMiLCJmaWxlIjoiNzc5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHtcbiAgUk9PVF9VUkwsXG4gIFNJR05VUF9VU0VSXG59IGZyb20gJy4uL2NvbnRhbnRzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbnVwVXNlciAocHJvcHMpIHtcbiAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QoYCR7Uk9PVF9VUkx9cmVnaXN0ZXJgLCBwcm9wcyk7XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSUdOVVBfVVNFUixcbiAgICBwYXlsb2FkOiByZXF1ZXN0XG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FjdGlvbnMvYXV0aC1hY3Rpb25zLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})