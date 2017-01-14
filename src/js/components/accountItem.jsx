/**
 * Created by rustemk on 10.12.16.
 */
import React from "react"

export default class AccountItem extends React.Component {
    render() {
        return <div>
            {this.props.account.name} - {this.props.account.balance}
            <button onClick={() => this.props.delete(this.props.account.id)}>
                delete
            </button>
        </div>;
    }
}