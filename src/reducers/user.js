//Instruments
import { ADD_USER_NAME } from '../actions/user';

const initialState = {
  name: ''
}

const user = function(state = initialState, action) {
  switch (action.type) {
    case ADD_USER_NAME:
      return {
        ...state,
        name: action.name
      };
      //return Object.assign({}, state, { name: action.name });

    default:
      return state;
  }
}

export default user;
