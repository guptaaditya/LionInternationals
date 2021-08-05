let initialState = {
    usersData: [],
    groups: []
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
    case 'ADD_USER':
      newState = Object.assign({}, state, {users: [action.user, ...state.users]});
      break;
    case 'ADD_GROUP':
      newState = Object.assign({}, state, {groups: [action.group, ...state.groups]});
      break;
      case 'GET_GROUPS':
        newState = Object.assign({}, state, {groups: action.groups});
        break;
      case 'DELETE_GROUP':
        newState = Object.assign({}, state, {groups: action.groups});
      break;
    default:
      newState = Object.assign({}, state);
  }
  return newState;
};

export default reducers