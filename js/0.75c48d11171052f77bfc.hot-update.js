webpackHotUpdate(0,{

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

	eval("/*\n* Local storage actions\n*/\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setStorage = setStorage;\nexports.getStorge = getStorge;\nexports.removeStorge = removeStorge;\n\nvar _bluebird = __webpack_require__(391);\n\nvar _bluebird2 = _interopRequireDefault(_bluebird);\n\nvar _cookiejs = __webpack_require__(392);\n\nvar _cookiejs2 = _interopRequireDefault(_cookiejs);\n\nvar _contants = __webpack_require__(123);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_bluebird2.default.promisifyAll(_cookiejs2.default);\n\nfunction setStorage(pairs) {\n  return {\n    type: _contants.SET_STORAGE,\n    payload: _cookiejs2.default.set(pairs)\n  };\n}\n\nfunction getStorge(name) {\n  console.log(_cookiejs2.default.get(name));\n  return {\n    type: _contants.GET_STORAGE,\n    payload: _cookiejs2.default.get(name)\n  };\n}\n\nfunction removeStorge(name) {\n\n  return {\n    type: _contants.DELETE_STORAGE,\n    payload: _cookiejs2.default.remove(name)\n  };\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3N0b3JhZ2UtYWN0aW9ucy5qcz85ODgxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQTs7Ozs7UUFjZ0I7UUFRQTtRQVFBOztBQTVCaEI7Ozs7QUFDQTs7OztBQUlBOzs7O0FBRkEsbUJBQVEsWUFBUjs7QUFTTyxTQUFTLFVBQVQsQ0FBcUIsS0FBckIsRUFBNEI7QUFDakMsU0FBTztBQUNMLCtCQURLO0FBRUwsYUFBUyxtQkFBTyxHQUFQLENBQVcsS0FBWCxDQUFUO0dBRkYsQ0FEaUM7Q0FBNUI7O0FBUUEsU0FBUyxTQUFULENBQW9CLElBQXBCLEVBQTBCO0FBQy9CLFVBQVEsR0FBUixDQUFZLG1CQUFPLEdBQVAsQ0FBVyxJQUFYLENBQVosRUFEK0I7QUFFL0IsU0FBTztBQUNMLCtCQURLO0FBRUwsYUFBUyxtQkFBTyxHQUFQLENBQVcsSUFBWCxDQUFUO0dBRkYsQ0FGK0I7Q0FBMUI7O0FBUUEsU0FBUyxZQUFULENBQXVCLElBQXZCLEVBQTZCOztBQUVsQyxTQUFPO0FBQ0wsa0NBREs7QUFFTCxhQUFTLG1CQUFPLE1BQVAsQ0FBYyxJQUFkLENBQVQ7R0FGRixDQUZrQyIsImZpbGUiOiIzNzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuKiBMb2NhbCBzdG9yYWdlIGFjdGlvbnNcbiovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWVqcyc7XG5cblByb21pc2UucHJvbWlzaWZ5QWxsKGNvb2tpZSk7XG5cbmltcG9ydCB7XG4gIEdFVF9TVE9SQUdFLFxuICBTRVRfU1RPUkFHRSxcbiAgREVMRVRFX1NUT1JBR0Vcbn0gZnJvbSAnLi4vY29udGFudHMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdG9yYWdlIChwYWlycykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9TVE9SQUdFLFxuICAgIHBheWxvYWQ6IGNvb2tpZS5zZXQocGFpcnMpXG4gIH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JnZSAobmFtZSkge1xuICBjb25zb2xlLmxvZyhjb29raWUuZ2V0KG5hbWUpKTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBHRVRfU1RPUkFHRSxcbiAgICBwYXlsb2FkOiBjb29raWUuZ2V0KG5hbWUpXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTdG9yZ2UgKG5hbWUpIHtcblxuICByZXR1cm4ge1xuICAgIHR5cGU6IERFTEVURV9TVE9SQUdFLFxuICAgIHBheWxvYWQ6IGNvb2tpZS5yZW1vdmUobmFtZSlcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYWN0aW9ucy9zdG9yYWdlLWFjdGlvbnMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})