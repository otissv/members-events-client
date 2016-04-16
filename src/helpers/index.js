/*
* Helper methods
*/

'usen strict';


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
