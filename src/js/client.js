import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import store from "./store"

// Layouts
import MainLayout from './containers/MainLayout';

// Pages
import Home from './containers/HomePage';
import Accounts from './containers/AccountsPage';
import Categories from './containers/CategoriesPage';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={MainLayout}>
                <Route path="/" component={Home}/>
                <Route path="accounts">
                    <IndexRoute component={Accounts}/>
                    {/*<Route path=":accountId" component={Account}/>*/}
                </Route>
                <Route path="categories">
                    <IndexRoute component={Categories}/>
                    {/*<Route path=":accountId" component={Account}/>*/}
                </Route>

            </Route>
        </Router>
    </Provider>, document.getElementById('app'));