import {
  CHANGE_SELECTED_TAB,
  GET_USER_REPOSITORIES_REQUEST,
  GET_USER_REPOSITORIES_SUCCESS,
  GET_USER_REPOSITORIES_FAIL
} from '../actions/list';

const initialState = {
    tabs: null,
    repositories: []
};

const list = function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SELECTED_TAB:
      return {
        ...state,
        tabs: action.tab
      };

    case GET_USER_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: action.data.data
      };

    default:
      return state;
  }
}

export default list;
