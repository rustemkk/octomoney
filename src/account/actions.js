import axios from "axios";
import { normalize, arrayOf } from 'normalizr';

import * as ac from './constants';
import schemas from './schemas';


export const loadAccounts = () => (dispatch) => {
  axios
    .get("http://localhost:4000/accounts")
    .then(result => {
      const normalized = normalize(result.data, arrayOf(schemas.accountSchema));
      dispatch(loadAccountsSuccess(normalized));
    });
};

export const loadAccountsSuccess = ({ entities: { accounts }, result }) => ({
  type: ac.LOAD_ACCOUNTS_SUCCESS,
  accounts,
  accountsByIds: result
});

export const createAccount = (account) => (dispatch) => {
  axios
    .post("http://localhost:4000/accounts", account)
    .then(result => {
      const normalized = normalize([result.data], arrayOf(schemas.accountSchema));
      dispatch(loadAccountsSuccess(normalized));
    });
};

export const deleteAccount = (accountId) => (dispatch) => {
  axios
    .delete("http://localhost:4000/accounts/" + accountId)
    .then(result => {
      if (result.status === 200) {
        dispatch(deleteAccountsSuccess(accountId))
      }
    });
};

export const deleteAccountsSuccess = (accountId) => ({
  type: ac.DELETE_ACCOUNTS_SUCCESS,
  accountId,
});