import * as _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as accountsActions from '../actions/accountsActions';
import AccountsListItem from '../components/AccountsListItem';


class AccountsPage extends React.Component {
  componentWillMount() {
    this.props.accountsActions.getAccounts();
  }

  render() {
    let {accounts} = this.props;

    if (_.isEmpty(accounts)) {
      return <div>
        You have no accounts.
      </div>;
    }

    accounts = _.map(accounts, account => <AccountsListItem key={account.id} account={account}/>);
    return <div>
      {accounts}
    </div>;
  }
}

const mapStateToProps = state => ({
  accounts: state.accounts.accounts
});

const mapDispatchToProps = dispatch => ({
  accountsActions: bindActionCreators(accountsActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage);
