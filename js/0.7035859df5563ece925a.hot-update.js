webpackHotUpdate(0,{

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = UserReducer;\n\nvar _contants = __webpack_require__(130);\n\nvar INITAL_STATE = {\n  loggedIn: false,\n  storage: null\n};\n\nfunction UserReducer() {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? INITAL_STATE : arguments[0];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _contants.ATHORISED:\n      return _extends({}, state, { loggedIn: action.payload.data });\n    default:\n      return state;\n  }\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9hdXRoLXJlZHVjZXIuanM/NmViZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFRd0I7O0FBUnhCOztBQUdBLElBQU0sZUFBZTtBQUNuQixZQUFVLEtBQVY7QUFDQSxXQUFTLElBQVQ7Q0FGSTs7QUFLUyxTQUFTLFdBQVQsR0FBbUQ7TUFBOUIsOERBQVEsNEJBQXNCO01BQVIsc0JBQVE7O0FBQ2hFLFVBQVEsT0FBTyxJQUFQO0FBQ047QUFDRSwwQkFBVyxTQUFPLFVBQVUsT0FBTyxPQUFQLENBQWUsSUFBZixHQUE1QixDQURGO0FBREY7QUFJSSxhQUFPLEtBQVAsQ0FERjtBQUhGLEdBRGdFIiwiZmlsZSI6IjQxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFUSE9SSVNFRCB9IGZyb20gJy4uL2NvbnRhbnRzJztcblxuXG5jb25zdCBJTklUQUxfU1RBVEUgPSB7XG4gIGxvZ2dlZEluOiBmYWxzZSxcbiAgc3RvcmFnZTogbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclJlZHVjZXIoc3RhdGUgPSBJTklUQUxfU1RBVEUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBVEhPUklTRUQ6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2dnZWRJbjogYWN0aW9uLnBheWxvYWQuZGF0YX07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9yZWR1Y2Vycy9hdXRoLXJlZHVjZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})