export default function reducer(state = {
    accounts: [],
    fetching: false,
    error: null
}, action) {
    switch (action.type) {
        case "FETCH_ACCOUNTS_PENDING": {
            return {
                ...state,
                fetching: true
            };
        }
        case "FETCH_ACCOUNTS_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        }
        case "FETCH_ACCOUNTS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                accounts: action.payload.data
            };
        }

        case "ADD_ACCOUNT_PENDING": {
            return {
                ...state,
                fetching: true
            };
        }
        case "ADD_ACCOUNT_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        }
        case "ADD_ACCOUNT_FULFILLED": {
            return {
                ...state,
                fetching: false,
                accounts: [...state.accounts, action.payload.data]
            };
        }

        case "UPDATE_ACCOUNT_PENDING": {
            return {
                ...state,
                fetching: true
            };
        }
        case "UPDATE_ACCOUNT_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        }
        case "UPDATE_ACCOUNT_FULFILLED": {
            return {
                ...state,
                fetching: false,
                accounts: [...state.accounts, action.payload.data]
            };
        }

        // case "DELETE_ACCOUNT_PENDING": {
        //     return {
        //         ...state,
        //         fetching: true
        //     };
        // }
        // case "DELETE_ACCOUNT_REJECTED": {
        //     return {
        //         ...state,
        //         fetching: false,
        //         error: action.payload
        //     };
        // }
        // case "DELETE_ACCOUNT_FULFILLED": {
        //     return {
        //         ...state,
        //         fetching: false,
        //         // TODO: find out how to pass id from action
        //         accounts: state.accounts.filter(account => account.id !== action.???)
        //     };
        // }

        case "DELETE_ACCOUNT": {
            return {
                ...state,
                accounts: state.accounts.filter(account => account.id !== action.payload)
            };
        }
    }
    return state;
}
