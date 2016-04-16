/*
* Component propTypes
*/

'usen strict';

export const propTypes = {
	authenticate  : React.PropTypes.func,
	children      : React.PropTypes.any,
	fields        : React.PropTypes.object,
	deleteStorage : React.PropTypes.func,
	getStorage    : React.PropTypes.func,
	isLoggedIn    : React.PropTypes.bool,
  loggedIn      : React.PropTypes.func,
  handleSubmit  : React.PropTypes.func,
  onSubmit      : React.PropTypes.func,
  register      : React.PropTypes.func,
  setStorage    : React.PropTypes.func,
  unauthenticate: React.PropTypes.func
};


export function mapStateToProps (state) {
  return {
    isLoggedIn  : state.application.isLoggedIn,
		selectedUser: state.users.selectedUser,
    storage     : state.application.storage,
		user        : state.users.user,
		usersAll    : state.users.usersAll
  };
}

export function arrayToObject (list) {
  function reducer (obj, user) {
    obj[`id_${user._id}`] = user;
    return obj;
  }

  return list.reduce(reducer, {});
}


export function query (_id, token) {
  return `?_id=${_id}&token=${token}`;
}


export function objectToArray (obj) {
  return Object.keys(obj).map(key => obj[key]);
}
