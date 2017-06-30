import axios from 'axios';


export const getAccounts = () => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_ACCOUNTS_PENDING',
      payload: ''
    });

    axios.get('http://localhost:4000/accounts')
      .then(response => {
        dispatch({
          type: 'FETCH_ACCOUNTS_FULFILLED',
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'FETCH_ACCOUNTS_REJECTED',
          payload: error
        });
      });
  };
};