import usersData from '../data/index'

let data = [...usersData];

function getUser(id) {
  let user = data.find(m => m.id === parseInt(id));
  return user
}

function getUsers() {
  return data
}

//Saves new User and returns complete list of Users thereafter
function addUser(params) {
  const { id } = data[data.length - 1];
  params.id = id+1;
  data.push(params);
  return getUsers();
}

//Deletes User by id and returns complete list of Users thereafter.
function deleteUser(params) {
  data = data.filter(user => user.id !== params.id);
  return data
}

const methods = {
  getUsers, addUser, deleteUser, getUser
};

const handler = {
  apply: function(method, thisArg, args) {
    let params = args[1] ? args[1] : undefined;
    return method(args[0], params);
  }
};

function send(fn, params) {
  return Promise.resolve(methods[fn](params));
}

const request = new Proxy(send, handler);

export default request;