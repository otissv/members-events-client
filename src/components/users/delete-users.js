/*
* Delete Users component
*/

import { USERS_ROUTE } from '../../contants';


export default function deleteUser(props) {
  const {
    removeUserFromList,
    removeUser,
    redirectTo,
    selectUser,
    selectedUser,
    setUser,
    storage,
    usersAll
  } = props;

  const { _id, token } = storage;

  removeUser(_id, token, selectedUser).payload
    .then(response => {
      if(!response.data.success) {
        console.log(response.data.message);
      }

      removeUserFromList(usersAll, selectedUser);
      setUser({});
      selectUser(null);
      redirectTo(USERS_ROUTE);
    });
}
