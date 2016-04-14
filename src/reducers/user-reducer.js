import { GET_USERS, GET_USER } from '../actions/';

const INITAL_STATE = {
  userAll: [],
  user: null
};

export default function userReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case GET_USER:
      return {...state, user: action.payload.data};
    case GET_USERS:
      return {...state, userAll: action.payload.data};
    default:
      return state;
  }
}
