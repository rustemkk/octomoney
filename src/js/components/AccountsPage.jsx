import React from "react"
import {connect} from "react-redux"

import {fetchAccounts, addAccount, updateAccount, deleteAccount} from "../actions/accountsActions"

@connect((store) => {
    return {
        accounts: store.accounts.accounts
    };
})
export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchAccounts());
    }

    addAccount() {
        this.props.dispatch(addAccount({
            name: this.refs.name.value,
            balance: this.refs.balance.value,
            initialBalance: this.refs.initialBalance.value,
            icon: this.refs.icon.value
        }));
    }

    updateAccount(account) {
        account.name = "Cashhhhh updated";
        account.balance = "100";
        this.props.dispatch(updateAccount(account));
    }

    deleteAccount(account) {
        this.props.dispatch(deleteAccount(account.id));
    }

    render() {
        const {accounts} = this.props;
        if (!accounts.length) {
            return <div>
                <button onClick={this.addAccount.bind(this)}>add new account</button>
            </div>;
        } else {
            const mappedAccounts = this.props.accounts.map(account =>
                <div key={account.id}>
                    {account.id} - {account.name} - {account.balance} - {account.initialBalance} - {account.icon}
                    &nbsp;
                    <button onClick={() => this.updateAccount(account)}>
                        update
                    </button>
                    &nbsp;
                    <button onClick={() => this.deleteAccount(account)}>
                        delete
                    </button>
                </div>);
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
