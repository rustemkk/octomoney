import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import NotFound from './components/NotFound';
import Accounts from './containers/AccountsPage';
import Home from './containers/HomePage';
import MainLayout from './containers/MainLayout';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={MainLayout}>
        <IndexRoute component={Home}/>
        <Route path="/accounts">
          <IndexRoute component={Accounts}/>
          {/*<Route path=":accountId" component={Account}/>*/}
        </Route>
      </Route>
      <Route path='*' component={NotFound}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);