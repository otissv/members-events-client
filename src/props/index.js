/*
* Component props
*/


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
		isLoggedIn   : state.application.isLoggedIn,
    storage      : state.application.storage,

		event        : state.events.event,
		eventsAll    : state.events.eventsAll,
		eventSelected: state.events.eventSelected,

		user         : state.users.user,
		usersAll     : state.users.usersAll,
		selectedUser : state.users.selectedUser
  };
}
