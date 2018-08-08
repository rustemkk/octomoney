import { get as g } from 'lodash';
import { createSelector } from 'reselect';


export const getAccountsByIds = state => g(state, 'accounts.accountsByIds', []);

export const getAccountsEntities = state => g(state, 'accounts.accounts', {});

export const getAccounts = createSelector(
  getAccountsByIds,
  getAccountsEntities,
  (ids, accounts) => ids.map(id => accounts[id])
);