import React from "react"
import {connect} from "react-redux"

import {fetchAccounts} from "../actions/accountsActions"
import {addAccount} from "../actions/accountsActions"
import {updateAccount} from "../actions/accountsActions"
import {deleteAccount} from "../actions/accountsActions"

import AccountsList from "./accountsList"

@connect((store) => {
    return {
        accounts: store.accounts.accounts
    };
})
export default class Layout extends React.Component {
    // componentWillMount() {

    fetchAccounts() {
        this.props.dispatch(fetchAccounts());
    }

    addAccount() {
        this.props.dispatch(addAccount({name: "CASHHH", balance: 5000, initialBalance: 0, icon: "cash.png"}));
    }

    updateAccount(account) {
        account.name= "Cashhhhh";
        account.balance= "100";
        this.props.dispatch(updateAccount(account));
    }

    deleteAccount(account) {
        this.props.dispatch(deleteAccount(account.id));
    }

    render() {
        const {accounts} = this.props;
        if (!accounts.length) {
            return <button onClick={this.fetchAccounts.bind(this)}>load accounts</button>;
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
                <button onClick={this.addAccount.bind(this)}>add new account</button>
            </div>;
        }
    }

    // render() {
    //     const {accounts} = this.props;
    //     if (!accounts.length) {
    //         return <button onClick={this.fetchAccounts.bind(this)}>load accounts</button>;
    //     } else {
    //         return <div>
    //             <AccountsList accounts={accounts} deleteItem={this.deleteAccount}/>
    //             <br/>
    //             <button onClick={this.addAccount.bind(this)}>add new account</button>
    //         </div>;
    //     }
    // }
}
