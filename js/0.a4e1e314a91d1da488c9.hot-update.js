webpackHotUpdate(0,{

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

	eval("/*\n* Authorisation actions\n */\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setStorage = setStorage;\nexports.getStorge = getStorge;\nexports.removeStorge = removeStorge;\nexports.register = register;\n\nvar _axios = __webpack_require__(204);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _bluebird = __webpack_require__(391);\n\nvar _bluebird2 = _interopRequireDefault(_bluebird);\n\nvar _cookiejs = __webpack_require__(392);\n\nvar _cookiejs2 = _interopRequireDefault(_cookiejs);\n\nvar _contants = __webpack_require__(123);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_bluebird2.default.promisifyAll(_cookiejs2.default);\n\nfunction setStorage(pairs) {\n  return {\n    type: _contants.SET_STORAGE,\n    payload: _cookiejs2.default.set(pairs)\n  };\n}\n\nfunction getStorge(storagekeys) {\n\n  var reducer = function reducer(result, item) {\n    result[item] = _cookiejs2.default.get(item);\n    return result;\n  };\n\n  return {\n    type: _contants.GET_STORAGE,\n    payload: storagekeys.reduce(reducer, {})\n  };\n}\n\nfunction removeStorge(name) {\n\n  return {\n    type: _contants.DELETE_STORAGE,\n    payload: _cookiejs2.default.remove(name)\n  };\n}\n\nfunction register(props) {\n  var request = _axios2.default.post(_contants.ROOT_URL + 'register', props);\n\n  return {\n    type: _contants.REGISTER,\n    payload: request\n  };\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2F1dGgtYWN0aW9ucy5qcz8zYTZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBOzs7OztRQWtCZ0I7UUFRQTtRQWFBO1FBUUE7O0FBN0NoQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQVNBLG1CQUFRLFlBQVI7O0FBR08sU0FBUyxVQUFULENBQXFCLEtBQXJCLEVBQTRCO0FBQ2pDLFNBQU87QUFDTCwrQkFESztBQUVMLGFBQVMsbUJBQU8sR0FBUCxDQUFXLEtBQVgsQ0FBVDtHQUZGLENBRGlDO0NBQTVCOztBQVFBLFNBQVMsU0FBVCxDQUFvQixXQUFwQixFQUFpQzs7QUFFdEMsTUFBTSxVQUFVLFNBQVYsT0FBVSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWtCO0FBQy9CLFdBQU8sSUFBUCxJQUFlLG1CQUFPLEdBQVAsQ0FBVyxJQUFYLENBQWYsQ0FEK0I7QUFFL0IsV0FBTyxNQUFQLENBRitCO0dBQWxCLENBRnNCOztBQU90QyxTQUFPO0FBQ0wsK0JBREs7QUFFTCxhQUFTLFlBQVksTUFBWixDQUFtQixPQUFuQixFQUE0QixFQUE1QixDQUFUO0dBRkYsQ0FQc0M7Q0FBakM7O0FBYUEsU0FBUyxZQUFULENBQXVCLElBQXZCLEVBQTZCOztBQUVsQyxTQUFPO0FBQ0wsa0NBREs7QUFFTCxhQUFTLG1CQUFPLE1BQVAsQ0FBYyxJQUFkLENBQVQ7R0FGRixDQUZrQztDQUE3Qjs7QUFRQSxTQUFTLFFBQVQsQ0FBbUIsS0FBbkIsRUFBMEI7QUFDL0IsTUFBTSxVQUFVLGdCQUFNLElBQU4sa0NBQWtDLEtBQWxDLENBQVYsQ0FEeUI7O0FBRy9CLFNBQU87QUFDTCw0QkFESztBQUVMLGFBQVMsT0FBVDtHQUZGLENBSCtCIiwiZmlsZSI6IjM3OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4qIEF1dGhvcmlzYXRpb24gYWN0aW9uc1xuICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUHJvbWlzZSBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZWpzJztcblxuaW1wb3J0IHtcbiAgUk9PVF9VUkwsXG4gIFJFR0lTVEVSLFxuICBHRVRfU1RPUkFHRSxcbiAgU0VUX1NUT1JBR0UsXG4gIERFTEVURV9TVE9SQUdFXG59IGZyb20gJy4uL2NvbnRhbnRzJztcblxuXG5Qcm9taXNlLnByb21pc2lmeUFsbChjb29raWUpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdG9yYWdlIChwYWlycykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9TVE9SQUdFLFxuICAgIHBheWxvYWQ6IGNvb2tpZS5zZXQocGFpcnMpXG4gIH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JnZSAoc3RvcmFnZWtleXMpIHtcblxuICBjb25zdCByZWR1Y2VyID0gKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICByZXN1bHRbaXRlbV0gPSBjb29raWUuZ2V0KGl0ZW0pO1xuICAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogR0VUX1NUT1JBR0UsXG4gICAgcGF5bG9hZDogc3RvcmFnZWtleXMucmVkdWNlKHJlZHVjZXIsIHt9KVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU3RvcmdlIChuYW1lKSB7XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBERUxFVEVfU1RPUkFHRSxcbiAgICBwYXlsb2FkOiBjb29raWUucmVtb3ZlKG5hbWUpXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlciAocHJvcHMpIHtcbiAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QoYCR7Uk9PVF9VUkx9cmVnaXN0ZXJgLCBwcm9wcyk7XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUdJU1RFUixcbiAgICBwYXlsb2FkOiByZXF1ZXN0XG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FjdGlvbnMvYXV0aC1hY3Rpb25zLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})