webpackHotUpdate(0,{

/***/ 779:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.signupUser = signupUser;\n\nvar _axios = __webpack_require__(188);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _contants = __webpack_require__(780);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ROOT_URL = 'http://localhost:3000/api/v01/';\nvar API_KEY = '?key=sdjkflsdjflsdjftert';\n\nfunction signupUser(props) {\n  var request = _axios2.default.post('http://localhost:3000/api/v01/register', props);\n\n  return {\n    type: _contants.SIGNUP_USER,\n    payload: request\n  };\n}\n\n// export function fetchUsers () {\n//   const request = axios.get(`${ROOT_URL}posts${API_KEY}`);\n//\n//   return {\n//     type: FETCH_USERS,\n//     payload: request\n//   };\n// }\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2F1dGgtYWN0aW9ucy5qcz8zYTZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztRQVlnQjs7QUFYaEI7Ozs7QUFFQTs7OztBQUtBLElBQU0sV0FBVyxnQ0FBWDtBQUNOLElBQU0sVUFBVSwwQkFBVjs7QUFHQyxTQUFTLFVBQVQsQ0FBcUIsS0FBckIsRUFBNEI7QUFDakMsTUFBTSxVQUFVLGdCQUFNLElBQU4sMkNBQXFELEtBQXJELENBQVYsQ0FEMkI7O0FBR2pDLFNBQU87QUFDTCwrQkFESztBQUVMLGFBQVMsT0FBVDtHQUZGLENBSGlDO0NBQTVCIiwiZmlsZSI6Ijc3OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7XG4gIFNJR05VUF9VU0VSXG59IGZyb20gJy4uL2NvbnRhbnRzJztcblxuXG5jb25zdCBST09UX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YwMS8nO1xuY29uc3QgQVBJX0tFWSA9ICc/a2V5PXNkamtmbHNkamZsc2RqZnRlcnQnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBzaWdudXBVc2VyIChwcm9wcykge1xuICBjb25zdCByZXF1ZXN0ID0gYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MDEvcmVnaXN0ZXJgLCBwcm9wcyk7XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSUdOVVBfVVNFUixcbiAgICBwYXlsb2FkOiByZXF1ZXN0XG4gIH07XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJzICgpIHtcbi8vICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLmdldChgJHtST09UX1VSTH1wb3N0cyR7QVBJX0tFWX1gKTtcbi8vXG4vLyAgIHJldHVybiB7XG4vLyAgICAgdHlwZTogRkVUQ0hfVVNFUlMsXG4vLyAgICAgcGF5bG9hZDogcmVxdWVzdFxuLy8gICB9O1xuLy8gfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hY3Rpb25zL2F1dGgtYWN0aW9ucy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 780:
/***/ function(module, exports) {

	eval("\"use strict\";\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI3ODAuanMiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})