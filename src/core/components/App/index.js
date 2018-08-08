import React from 'react';
import { Link } from 'react-router';

import s from './index.scss';


export default React.createClass({
  render: function () {
    return (
      <div className={s.App}>
        <div className={s.MainMenu}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/" activeClassName="active">Home</Link>
          &nbsp;&nbsp;&nbsp;<Link to="/categories" activeClassName="active">Categories</Link>
          &nbsp;&nbsp;&nbsp;<Link to="/accounts" activeClassName="active">Accounts</Link>
        </div>
        <div className={s.MainContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
});