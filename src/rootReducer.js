import { combineReducers } from "redux"

import accountsReducer from "./account/reducer"
// import categories from "./categoriesReducer"


const rootReducer = combineReducers({
  accounts: accountsReducer,
});


export default rootReducer;

