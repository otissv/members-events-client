webpackHotUpdate(0,{

/***/ 785:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = UserReducer;\n\nvar _actions = __webpack_require__(122);\n\nvar _actions2 = _interopRequireDefault(_actions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar GET_STORAGE = _actions2.default.GET_STORAGE;\n\n\nvar INITAL_STATE = {\n  storage: null\n};\n\nfunction UserReducer() {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? INITAL_STATE : arguments[0];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case GET_STORAGE:\n      return _extends({}, state, { storage: action.payload.data });\n    default:\n      return state;\n  }\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9zdG9yYWdlLXJlZHVjZXIuanM/MzlkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFRd0I7O0FBUnhCOzs7Ozs7SUFFUTs7O0FBRVIsSUFBTSxlQUFlO0FBQ25CLFdBQVMsSUFBVDtDQURJOztBQUlTLFNBQVMsV0FBVCxHQUFtRDtNQUE5Qiw4REFBUSw0QkFBc0I7TUFBUixzQkFBUTs7QUFDaEUsVUFBUSxPQUFPLElBQVA7QUFDTixTQUFLLFdBQUw7QUFDRSwwQkFBVyxTQUFPLFNBQVMsT0FBTyxPQUFQLENBQWUsSUFBZixHQUEzQixDQURGO0FBREY7QUFJSSxhQUFPLEtBQVAsQ0FERjtBQUhGLEdBRGdFIiwiZmlsZSI6Ijc4NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvJztcblxuY29uc3QgeyBHRVRfU1RPUkFHRSB9ID0gYWN0aW9ucztcblxuY29uc3QgSU5JVEFMX1NUQVRFID0ge1xuICBzdG9yYWdlOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUmVkdWNlcihzdGF0ZSA9IElOSVRBTF9TVEFURSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdFVF9TVE9SQUdFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3RvcmFnZTogYWN0aW9uLnBheWxvYWQuZGF0YX07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9yZWR1Y2Vycy9zdG9yYWdlLXJlZHVjZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})