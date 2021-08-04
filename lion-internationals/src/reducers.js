let initialState = {
    usersData: [],
}

const reducers = (state = initialState, action) => {
  let newState = {};
  switch(action.type) {
    case 'GET_USERS':
      newState = Object.assign({}, state, {users: action.users});
    break;
    case 'DELETE_USER':
      newState = Object.assign({}, state, {users: action.users});
    break;
    default:
      newState = Object.assign({}, state);
  }
  return newState;
};

export default reducers