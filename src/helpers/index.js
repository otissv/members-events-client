/*
* Helper methods
*/

'usen strict';


export function arrayToObject (list, _id) {
  function reducer (obj, item) {
    obj[`id_${item[_id]}`] = item;
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
