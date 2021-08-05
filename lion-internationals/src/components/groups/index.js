import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { deleteGroup } from '../../actions'
import styled from 'styled-components'

const Groups = (props) => {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    setGroups(props.groups)
  },[props.groups])

    return (
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Group Name</th>
              <th>Admin</th>
              <th>Number of Members</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {groups && groups.length > 0 && groups.map((g) => {
              return (
                <tr key={g.id}>
                  <td>{g.name}</td>
                  <td>{g.admin}</td>
                  <td>{g.members?.length || 0}</td>
                  <td onClick={() => alert('Hello')}>View</td>
                  <td onClick={() => props.deleteGroup(g)}>Delete</td>
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
    users: state.users,
    groups: state.groups,
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {
    deleteGroup: (group) => {
        deleteGroup(dispatch, group)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups);