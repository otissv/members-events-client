webpackHotUpdate(0,{

/***/ 59:
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/*\n* Aplication constants\n */\n\n// API\nvar API_URL = exports.API_URL = 'http://localhost:3000/api/v01/';\n\n// routes\nvar ABOUT = exports.ABOUT = '/about';\nvar CONTACT = exports.CONTACT = '/contact';\nvar COURSES = exports.COURSES = 'courses';\nvar EVENTS = exports.EVENTS = '/events';\nvar MY_ACCOUNT = exports.MY_ACCOUNT = 'my-account';\nvar ROOT = exports.ROOT = '/';\nvar SIGNIN = exports.SIGNIN = '/signin';\nvar SIGNOUT = exports.SIGNOUT = '/signout';\nvar SIGNUP = exports.SIGNUP = '/signup';\nvar SEVICES = exports.SEVICES = '/sevices';\nvar USRES = exports.USRES = '/users';\n\nz;\n// Stoarage actions types\nvar LOGGEDIN = exports.LOGGEDIN = 'LOGGEDIN';\nvar SET_STORAGE = exports.SET_STORAGE = 'SET_STORAGE';\nvar GET_STORAGE = exports.GET_STORAGE = 'GET_STORAGE';\nvar DELETE_STORAGE = exports.DELETE_STORAGE = 'DELETE_STORAGE';\n\n// Authentication actions types\nvar REGISTER = exports.REGISTER = 'REGISTER';\n\n// User Action types\nvar GET_USERS = exports.GET_USERS = 'GET_USERS';\nvar GET_USER = exports.GET_USER = 'GET_USER';\nvar DELETE_USER = exports.DELETE_USER = 'DELETE_USER';\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YW50cy9pbmRleC5qcz80ZmE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLTyxJQUFNLDRCQUFVLGdDQUFWOzs7QUFHTixJQUFNLHdCQUFRLFFBQVI7QUFDTixJQUFNLDRCQUFVLFVBQVY7QUFDTixJQUFNLDRCQUFTLFNBQVQ7QUFDTixJQUFNLDBCQUFTLFNBQVQ7QUFDTixJQUFNLGtDQUFhLFlBQWI7QUFDTixJQUFNLHNCQUFPLEdBQVA7QUFDTixJQUFNLDBCQUFTLFNBQVQ7QUFDTixJQUFNLDRCQUFVLFVBQVY7QUFDTixJQUFNLDBCQUFTLFNBQVQ7QUFDTixJQUFNLDRCQUFVLFVBQVY7QUFDTixJQUFNLHdCQUFPLFFBQVA7O0FBRWI7O0FBRU8sSUFBTSw4QkFBVyxVQUFYO0FBQ04sSUFBTSxvQ0FBYyxhQUFkO0FBQ04sSUFBTSxvQ0FBYyxhQUFkO0FBQ04sSUFBTSwwQ0FBZ0IsZ0JBQWhCOzs7QUFHTixJQUFNLDhCQUFXLFVBQVg7OztBQUdOLElBQU0sZ0NBQVksV0FBWjtBQUNOLElBQU0sOEJBQVcsVUFBWDtBQUNOLElBQU0sb0NBQWMsYUFBZCIsImZpbGUiOiI1OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4qIEFwbGljYXRpb24gY29uc3RhbnRzXG4gKi9cblxuLy8gQVBJXG5leHBvcnQgY29uc3QgQVBJX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YwMS8nO1xuXG4vLyByb3V0ZXNcbmV4cG9ydCBjb25zdCBBQk9VVCA9ICcvYWJvdXQnO1xuZXhwb3J0IGNvbnN0IENPTlRBQ1QgPSAnL2NvbnRhY3QnO1xuZXhwb3J0IGNvbnN0IENPVVJTRVM9ICdjb3Vyc2VzJztcbmV4cG9ydCBjb25zdCBFVkVOVFMgPSAnL2V2ZW50cyc7XG5leHBvcnQgY29uc3QgTVlfQUNDT1VOVCA9ICdteS1hY2NvdW50JztcbmV4cG9ydCBjb25zdCBST09UID0gJy8nO1xuZXhwb3J0IGNvbnN0IFNJR05JTiA9ICcvc2lnbmluJztcbmV4cG9ydCBjb25zdCBTSUdOT1VUID0gJy9zaWdub3V0JztcbmV4cG9ydCBjb25zdCBTSUdOVVAgPSAnL3NpZ251cCc7XG5leHBvcnQgY29uc3QgU0VWSUNFUyA9ICcvc2V2aWNlcyc7XG5leHBvcnQgY29uc3QgVVNSRVM9ICcvdXNlcnMnO1xuXG56XG4vLyBTdG9hcmFnZSBhY3Rpb25zIHR5cGVzXG5leHBvcnQgY29uc3QgTE9HR0VESU4gPSAnTE9HR0VESU4nO1xuZXhwb3J0IGNvbnN0IFNFVF9TVE9SQUdFID0gJ1NFVF9TVE9SQUdFJztcbmV4cG9ydCBjb25zdCBHRVRfU1RPUkFHRSA9ICdHRVRfU1RPUkFHRSc7XG5leHBvcnQgY29uc3QgREVMRVRFX1NUT1JBR0U9ICdERUxFVEVfU1RPUkFHRSc7XG5cbi8vIEF1dGhlbnRpY2F0aW9uIGFjdGlvbnMgdHlwZXNcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9ICdSRUdJU1RFUic7XG5cbi8vIFVzZXIgQWN0aW9uIHR5cGVzXG5leHBvcnQgY29uc3QgR0VUX1VTRVJTID0gJ0dFVF9VU0VSUyc7XG5leHBvcnQgY29uc3QgR0VUX1VTRVIgPSAnR0VUX1VTRVInO1xuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSID0gJ0RFTEVURV9VU0VSJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29udGFudHMvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})