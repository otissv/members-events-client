webpackHotUpdate(0,{

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = UserReducer;\n\nvar _contants = __webpack_require__(130);\n\nvar INITAL_STATE = {\n  storage: null\n};\n\nfunction UserReducer() {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? INITAL_STATE : arguments[0];\n  var action = arguments[1];\n\n\n  switch (action.type) {\n    // case LOGIN:\n    //   return {...state, loggedIn: action.payload.data};\n    case _contants.GET_STORAGE:\n      return _extends({}, state, action.payload.data);\n    default:\n      return state;\n  }\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9hdXRoLXJlZHVjZXIuanM/NmViZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFPd0I7O0FBUHhCOztBQUdBLElBQU0sZUFBZTtBQUNuQixXQUFTLElBQVQ7Q0FESTs7QUFJUyxTQUFTLFdBQVQsR0FBbUQ7TUFBOUIsOERBQVEsNEJBQXNCO01BQVIsc0JBQVE7OztBQUVoRSxVQUFRLE9BQU8sSUFBUDs7O0FBR047QUFDRSwwQkFBVyxPQUFVLE9BQU8sT0FBUCxDQUFlLElBQWYsQ0FBckIsQ0FERjtBQUhGO0FBTUksYUFBTyxLQUFQLENBREY7QUFMRixHQUZnRSIsImZpbGUiOiI0MTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHRVRfU1RPUkFHRSwgTE9HSU4gfSBmcm9tICcuLi9jb250YW50cyc7XG5cblxuY29uc3QgSU5JVEFMX1NUQVRFID0ge1xuICBzdG9yYWdlOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUmVkdWNlcihzdGF0ZSA9IElOSVRBTF9TVEFURSwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIC8vIGNhc2UgTE9HSU46XG4gICAgLy8gICByZXR1cm4gey4uLnN0YXRlLCBsb2dnZWRJbjogYWN0aW9uLnBheWxvYWQuZGF0YX07XG4gICAgY2FzZSBHRVRfU1RPUkFHRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkLmRhdGF9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vcmVkdWNlcnMvYXV0aC1yZWR1Y2VyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})