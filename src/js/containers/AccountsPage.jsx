import React from "react"
import {connect} from "react-redux"

import store from "../store"

import AccountsListItem from "../components/AccountsListItem"

import {fetchAccounts, addAccount, updateAccount, deleteAccount} from "../actions/accountsActions"

class AccountsPage extends React.Component {
    componentWillMount() {
        store.dispatch(fetchAccounts());
    }

    addAccount() {
        store.dispatch(addAccount({
            name: this.refs.name.value,
            balance: this.refs.balance.value,
            initialBalance: this.refs.initialBalance.value,
            icon: this.refs.icon.value
        }));
    }

    updateAccount(account) {
        store.dispatch(updateAccount(account));
    }

    deleteAccount(account) {
        store.dispatch(deleteAccount(account));
    }

    render() {
        const {accounts} = this.props;
        if (!accounts.length) {
            return <div>
                <button onClick={this.addAccount.bind(this)}>add new account</button>
            </div>;
        } else {
            const mappedAccounts = this.props.accounts.map(account =>
                <AccountsListItem
                    key={account.id}
                    account={account}
                    updateAccount={this.updateAccount}
                    deleteAccount={this.deleteAccount}
                />);

            return <div>
                {mappedAccounts}
                <br/>
                <input ref="name" defaultValue=''></input>
                <input ref="balance" defaultValue=''></input>
                <input ref="initialBalance" defaultValue=''></input>
                <input ref="icon" defaultValue=''></input>
                <button onClick={this.addAccount.bind(this)}>add new account</button>
            </div>;
        }
    }
}

const mapStateToProps = (store) => ({
    accounts: store.accounts.accounts
});

export default connect(mapStateToProps)(AccountsPage);
