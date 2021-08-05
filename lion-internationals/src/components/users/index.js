import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { deleteUser } from '../../actions'
import styled from 'styled-components'

const Users = (props) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(props.users)
  },[props.users])

    return (
      <Container>
        <Table>
          <thead>
            <tr>
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
                  <td onClick={() => props.deleteUser(u)}>Delete</td>
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
  width: 100%;
  
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
    deleteUser: (user) => {
      deleteUser(dispatch, user)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);