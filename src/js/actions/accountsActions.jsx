import axios from "axios";

/**
 * Fetches all accounts
 * @returns {{type: string, payload: *}}
 */
export function fetchAccounts() {
    return {
        type: "FETCH_ACCOUNTS",
        payload: axios.get("http://localhost:4000/accounts")
    }
}

/**
 * Adds account
 * @param account - {name, icon, balance, initialBalance} - account nt to add
 * @returns {{type: string, payload: *}}
 */
export function addAccount(account) {
    console.log("Adding account:", account);;
    return {
        type: "ADD_ACCOUNT",
        payload: axios.post("http://localhost:4000/accounts", account)
    }
}

/**
 * Updates account
 * @param account - {id, name, icon, balance, initialBalance} - account to update
 * @returns {{type: string, payload: *}}
 */
export function updateAccount(account) {
    return {
        type: "UPDATE_ACCOUNT",
        //TODO: is it wrong to concatenate the URL??
        payload: axios.put("http://localhost:4000/accounts/" + account.id, {account})
    }
}

/**
 * Deletes account
 * @param id - ID of deleting account
 * @returns {{type: string, payload: *}}
 */
export function deleteAccount(id) {
    console.log("Deleting account:", id);
    axios.delete("http://localhost:4000/accounts/" + id);
    return {
        type: "DELETE_ACCOUNT",
        payload: id
    }
}
