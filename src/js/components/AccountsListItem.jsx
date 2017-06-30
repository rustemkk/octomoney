import React from 'react';

class AccountsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      account: this.props.account
    };
  }

  editAccount() {
    this.setState({
      isEditing: true,
      // account: this.state.account
    });
  }

  // updateAccount() {
  //   this.props.updateAccount({
  //     id: this.state.account.id,
  //     name: this.refs.name.value,
  //     balance: this.refs.balance.value,
  //     initialBalance: this.refs.initialBalance.value,
  //     icon: this.refs.icon.value
  //   });
  //   this.setState({isEditing: false});
  // }

  render() {
    const {account} = this.state;

    if (this.state.isEditing) {
      return <div>
        {account.id} -
        <input ref="name" defaultValue={account.name}></input> -
        <input ref="balance" defaultValue={account.balance}></input> -
        <input ref="initialBalance" defaultValue={account.initialBalance}></input> -
        <input ref="icon" defaultValue={account.icon}></input>
        {/*<button onClick={this.updateAccount.bind(this)}>save account</button>*/}
      </div>;
    } else {
      return <div>
        {account.id} - {account.name} - {account.balance} - {account.initialBalance} - {account.icon}
        {/*&nbsp;*/}
        {/*<button onClick={this.editAccount.bind(this)}>*/}
          {/*edit*/}
        {/*</button>*/}
        {/*&nbsp;*/}
        {/*<button onClick={this.props.deleteAccount.bind(this, account)}>*/}
          {/*delete*/}
        {/*</button>*/}
      </div>;
    }
  }
}

AccountsListItem.propTypes = {
  account: React.PropTypes.object.isRequired,
  updateAccount: React.PropTypes.func,
  deleteAccount: React.PropTypes.func
};

export default AccountsListItem;