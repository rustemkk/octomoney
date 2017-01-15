// TODO: find a way to make webpack and mocha friends :)

import {expect} from 'chai';

import reducer from '../../../src/js/reducers';

describe('Accounts reducer:', () => {
    it('handles ADD_ACCOUNT_PENDING', () => {
        const state = {
            accounts: [],
            fetching: false,
            error: null
        };
        const action = {
            type: 'ADD_ACCOUNT_PENDING',
            payload: {}
        };
        const nextState = reducer(state, action);

        expect(nextState).to.equal({
                accounts: [],
                fetching: true,
                error: null
            }
        );
    });

    it('handles ADD_ACCOUNT_FULFILLED', () => {
        const state = {
            accounts: [],
            fetching: true,
            error: null
        };
        const action = {
            type: 'ADD_ACCOUNT_FULFILLED',
            payload: {
                name: "Cash",
                initialBalance: 100,
                balance: 500,
                icon: "cash.png"
            }
        };
        const nextState = reducer(state, action);

        expect(nextState).to.equal({
                accounts: [{
                    name: "Cash",
                    initialBalance: 100,
                    balance: 500,
                    icon: "cash.png"
                }],
                fetching: false,
                error: null
            }
        );
    });
});
