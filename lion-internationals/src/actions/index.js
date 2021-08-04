import request from '../api';

export function getUser(id) {
  return request('getUser', id);
}

export function getUsers() {
  return dispatch => {
    return request('getUsers').then(users => dispatch({
        type: 'GET_USERS', 
        users
      })
    )
  }
}

export function addUser(params) {
  return dispatch => {
    return request('addUser', params).then(user => dispatch({
        type: 'GET_USERS', 
        user
      })
    )
  }
}

export function deleteUser(params) {
  return dispatch => {
    return request('deleteUser', params).then(users => dispatch({
        type: 'GET_USERS', 
        users
      })
    )
  }
}