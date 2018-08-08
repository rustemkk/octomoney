import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

import AccountsPage from './account/containers/AccountsPage';
import App from './core/components/App';
import HomePage from './core/components/HomePage';
import store from "./store"


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={HomePage}/>
        <Route path="accounts">
          <IndexRoute component={AccountsPage}/>
          {/*<Route path=":accountId" component={Account}/>*/}
        </Route>
        {/*<Route path="categories">*/}
        {/*<IndexRoute component={Categories}/>*/}
        {/*/!*<Route path=":accountId" component={Account}/>*!/*/}
        {/*</Route>*/}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);