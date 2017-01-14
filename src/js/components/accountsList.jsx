/**
 * Created by rustemk on 10.12.16.
 */
import React from "react"

import AccountItem from "./accountItem"

export default class AccountsList extends React.Component {
    render() {
        const mappedAccounts = this.props.accounts.map(account =>
            <AccountItem key={account.id}
                         account={account}
                         delete={this.props.deleteItem}/>);

        return <div>{mappedAccounts}</div>;
    }
}