import {combineReducers} from "redux"

import accounts from "./accountsReducer"
import categories from "./categoriesReducer"

export default combineReducers({
    accounts,
    categories
})
