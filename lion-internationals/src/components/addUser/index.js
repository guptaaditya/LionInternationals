import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import { addUser } from '../../actions'
import 'bootstrap/dist/css/bootstrap.min.css';

const AddUser = (props) => {
    const [ formData, setFormData ] = useState({})
    const [ errors, setErrors ] = useState({})
    
    useEffect(()=> {
        console.log(props.users)
        debugger
    },[props.users])

    const setField = (field, value) => {
        setFormData({
          ...formData,
          [field]: value
        })
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = checkErrors()
        if ( Object.keys(newErrors).length > 0 ) {
          setErrors(newErrors)
        } else {
            console.log(props.users)
            formData.id = props.users?.length
            props.addUser(formData)
            setFormData({})
        }
    }

    const checkErrors = () => {
        const { first_name, last_name, email, phone } = formData
        const newErrors = {}
        if ( !first_name || first_name === '' ) newErrors.first_name = 'cannot be blank!'
        if ( !last_name || last_name === '' ) newErrors.last_name = 'cannot be blank!'
        if ( !email || email === '' ) newErrors.email = 'cannot be blank!'
        if ( !phone || phone === '' ) newErrors.comment = 'cannot be blank!'
        else if ( phone.length > 10 ) newErrors.comment = 'number is too long!'
    
        return newErrors
    }

    return(
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" onChange={ e => setField('first_name', e.target.value) }/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" onChange={ e => setField('last_name', e.target.value) }/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={ e => setField('email', e.target.value) }/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="Phone" onChange={ e => setField('phone', e.target.value) }/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

const mapStateToProps = (state) => {
    return {
      users: state.users 
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
       addUser: (user) => {
           debugger
           addUser(dispatch, user)
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)