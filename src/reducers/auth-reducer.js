import {
  LOGGEDIN,
  SET_STORAGE
} from '../contants';


const INITAL_STATE = {
  isLoggedIn: false,
  storage : null
};

export default function UserReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case LOGGEDIN:
      return {...state, isLoggedIn: action.payload};
    case SET_STORAGE:
      return {...state, storage: action.payload};
    default:
      return state;
  }
}
