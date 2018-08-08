import { uniq } from 'lodash';
import { combineReducers } from 'redux';
import * as ac from './constants';


const accounts = (state = {}, action) => {
  switch (action.type) {
    case ac.LOAD_ACCOUNTS_SUCCESS:
      return { ...state, ...action.accounts };

    default:
      return state;
  }
};

const accountsByIds = (state = [], action) => {
  switch (action.type) {
    case ac.LOAD_ACCOUNTS_SUCCESS:
      return uniq([...state, ...action.accountsByIds]);
    case ac.DELETE_ACCOUNTS_SUCCESS:
      return state.filter(accountId => accountId !== action.accountId);

    default:
      return state;
  }
};

const accountsReducer = combineReducers({
  accounts,
  accountsByIds
});


export default accountsReducer;