/**
 * Created by rustemk on 15.01.17.
 */
import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
    render: function () {
        return (
            <div>
                <header>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/" activeClassName="active">Home</Link>
                    &nbsp;&nbsp;&nbsp;<Link to="/" activeClassName="active">Categories</Link>
                    &nbsp;&nbsp;&nbsp;<Link to="/accounts" activeClassName="active">Accounts</Link>
                </header>
                <br/>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
});