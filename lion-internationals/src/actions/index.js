import Data from '../data/index'
let users = [...Data[0]];
let groups = [...Data[1]];

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

export function deleteGroup(dispatch, params) {
  groups = groups.filter(group => group.id !== params.id);
  dispatch({
    type: 'DELETE_GROUP',
    groups
  })
}

export function getGroups(dispatch, id) {
  dispatch({
    type: 'GET_GROUPS',
    groups
  })
}

export function addGroup(dispatch, group) {
  dispatch({
    type: 'ADD_GROUP', 
    group
  })
}