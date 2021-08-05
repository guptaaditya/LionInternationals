import usersData from '../data/index'
let users = [...usersData];

export function getUser(dispatch, id) {
   dispatch({
    type: 'GET_USER',
    id
  })
}

export function getUsers(dispatch) {
  dispatch({
    type: 'GET_USERS',
    users
  })
}

export function addUser(dispatch, user) {
  dispatch({
    type: 'ADD_USER', 
    user
  })
}

export function deleteUser(dispatch, params) {
  users = users.filter(user => user.id !== params.id);
  dispatch({
    type: 'DELETE_USER',
    users
  })
}