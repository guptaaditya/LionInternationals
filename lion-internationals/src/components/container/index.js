import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { getUsers, getGroups } from '../../actions'

const Container = (props) => {

  useEffect(() => {
    props.getUsers();
    props.getGroups();
  },[props])

  return (
    <div className="container">
      {props.children}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => { 
  return {
    getUsers: () => getUsers(dispatch),
    getGroups: () => getGroups(dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Container);