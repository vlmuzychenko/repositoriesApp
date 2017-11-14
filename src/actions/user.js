export const ADD_USER_NAME = 'ADD_USER_NAME';

export function addUserName(name) {
  return {
    type: ADD_USER_NAME,
    name
  };
}
