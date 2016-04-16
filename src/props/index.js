/*
* Component props
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
	heading				: React.PropTypes.string,
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
