import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import store from "./store"

// Layouts
import MainLayout from './components/MainLayout';

// Pages
import Home from './components/HomePage';
import Accounts from './components/AccountsPage';
import Categories from './components/CategoriesPage';

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