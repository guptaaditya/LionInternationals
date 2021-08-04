import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers, deleteUser } from '../../actions'
import styled from 'styled-components'

const Users = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    debugger
    props.actions.getUsers();
  },[])

  useEffect(() => {
    debugger
    setUsers(props.users)
  },[props.users])

    return (
      <Container>
        <Table>
          <thead>
            <tr>
              {/* <th className="actions" onClick={onAddUser}>+</th> */}
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 && users.map((u, index) => {
              return (
                <tr key={index}>
                  <td>{u.first_name}</td>
                  <td>{u.last_name}</td>
                  <td>{u.email}</td>
                  <td>{u.phone}</td>
                  <td onClick={() => props.actions.deleteUser(u)}>Delete</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
};

const Container = styled.div`
  display: flex;
`
const Table = styled.table`
  border-collapse: collapse;
  width: 60rem;
  
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
  }

  td {
    width: 9rem;
  }

  tr {
    height: 3rem;
  }

  tr:nth-child(even){
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`
const mapStateToProps = (state) => {
  return { 
    users: state.users 
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {
    actions: bindActionCreators({ getUsers, deleteUser }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);