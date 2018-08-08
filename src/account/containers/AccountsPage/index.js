import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"


import { createAccount, deleteAccount, loadAccounts } from "../../actions"
import AccountsListItem from "../../components/AccountsListItem"
import { getAccounts } from "../../selectors"


class AccountsPage extends Component {
  componentWillMount() {
    const { loadAccounts } = this.props;
    loadAccounts();
  }

  onCreateAccount() {
    const { createAccount } = this.props;
    createAccount({
      name: this.refs.name.value,
      balance: this.refs.balance.value,
      initialBalance: this.refs.initialBalance.value,
      icon: this.refs.icon.value
    });
  }

  onDeleteAccount(accountId) {
    const { deleteAccount } = this.props;
    deleteAccount(accountId);
  }

  onUpdateAccount() {
    // const { deleteAccount } = this.props;
    // deleteAccount(accountId);
  }

  render() {
    const { accounts } = this.props;
    // if (!accounts.length) {
    //   return <div>
    //     <button onClick={this.addAccount.bind(this)}>add new account</button>
    //   </div>;
    // } else {
    const mappedAccounts = accounts.map(account =>
      <AccountsListItem
        key={account.id}
        account={account}
        // updateAccount={this.updateAccount}
        onDeleteAccount={(accountId) => this.onDeleteAccount(accountId)}
      />);

    return <div>
      {mappedAccounts}
      <br/>
      <input ref="name" defaultValue=''/>
      <input ref="balance" defaultValue=''/>
      <input ref="initialBalance" defaultValue=''/>
      <input ref="icon" defaultValue=''/>
      <button onClick={() => this.onCreateAccount()}>create account</button>
    </div>;
  }
}

AccountsPage.propTypes = {
  accounts: PropTypes.array.isRequired,
};

const mapStateToProps = (store) => ({
  accounts: getAccounts(store)
});

const mapDispatchToProps = {
  createAccount,
  deleteAccount,
  loadAccounts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage);
