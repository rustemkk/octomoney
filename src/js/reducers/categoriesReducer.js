/**
 * Created by rustemk on 15.01.17.
 */
export default function reducer(state = {
    categories: [],
    fetching: false,
    error: null
}, action) {
    switch (action.type) {
        case "FETCH_CATEGORIES_PENDING": {
            return {
                ...state,
                fetching: true
            };
        }
        case "FETCH_CATEGORIES_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        }
        case "FETCH_CATEGORIES_FULFILLED": {
            return {
                ...state,
                fetching: false,
                categories: action.payload.data
            };
        }

        case "ADD_CATEGORY_PENDING": {
            return {
                ...state,
                fetching: true
            };
        }
        case "ADD_CATEGORY_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        }
        case "ADD_CATEGORY_FULFILLED": {
            return {
                ...state,
                fetching: false,
                categories: [...state.categories, action.payload.data]
            };
        }

        case "UPDATE_CATEGORY_PENDING": {
            return {
                ...state,
                fetching: true
            };
        }
        case "UPDATE_CATEGORY_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        }
        case "UPDATE_CATEGORY_FULFILLED": {
            return {
                ...state,
                fetching: false,
                categories: [...state.categories, action.payload.data]
            };
        }

        case "DELETE_CATEGORY": {
            return {
                ...state,
                categories: state.categories.filter(category => category.id !== action.payload)
            };
        }
    }
    return state;
}
