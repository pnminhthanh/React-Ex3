import {
  fetchUsersBegin,
  fetchUsersSuccess,
  fetchUsersError,
} from '../actions';
import axios from 'axios';

export function fetchUsers() {
  return dispatch => {
    console.log('tt');
    dispatch(fetchUsersBegin());
    return fetch('http://localhost:8086/users')
      .then(res => res.json())
      .then(json => {
        dispatch(fetchUsersSuccess(json));
        console.log('users', json);
        return json;
      })
      .catch(error => dispatch(fetchUsersError(error)));
  };
}

export function submitUsers(item) {
  return dispatch => {
    return axios
      .post('/register', item)
      .then(response => {
        dispatch(fetchUsers());
      })
      .catch(error => {
        alert(error);
      });
  };
}

export function deleteUser(id) {
  return dispatch => {
    return axios
      .delete('/user/' + id)
      .then(response => {
        dispatch(fetchUsers());
      })
      .catch(error => {
        alert(error);
      });
  };
}
