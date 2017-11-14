//Core
import { combineReducers } from 'redux';

//Reducers
import user from './user';
import list from './list';

//combineReducers
const reducers = combineReducers({
  user: user,
  list: list
});

export default reducers;
