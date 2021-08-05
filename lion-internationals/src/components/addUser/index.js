import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import { addUser } from '../../actions'
import 'bootstrap/dist/css/bootstrap.min.css';

const AddUser = (props) => {
    const [ formData, setFormData ] = useState({})
    const [ errors, setErrors ] = useState({})
    
    const setField = (field, value) => {
        setFormData({
          ...formData,
          [field]: value
        })

        if ( !!errors[field] ) setErrors({
            ...errors,
            [field]: null
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = checkErrors()
        if ( Object.keys(newErrors).length > 0 ) {
          setErrors(newErrors)
          return
        } else {
            formData.id = props.users?.length
            props.addUser(formData)
            props.history.push('/')
        }
    }

    const checkErrors = () => {
        const { first_name, last_name, email, phone } = formData
        const newErrors = {}
        if ( !first_name || first_name === '' ) newErrors.first_name = 'First name cannot be blank!'
        if ( !last_name || last_name === '' ) newErrors.last_name = 'Last name cannot be blank!'
        if ( !email || email === '' ) newErrors.email = 'Email address cannot be blank!'
        if ( !phone || phone === '' ) newErrors.phone = 'Phone number cannot be blank!'
        else if ( phone.length > 13 ) newErrors.phone = 'Phone number is too long!'
        return newErrors
    }

    return(
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="First Name" 
                    isInvalid={!!errors?.first_name}
                    onChange={ e => setField('first_name', e.target.value) }
                />
                <Form.Control.Feedback type='invalid'>
                    { errors?.first_name }
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Last Name" 
                    isInvalid={!!errors?.last_name}
                    onChange={ e => setField('last_name', e.target.value) }
                />
                <Form.Control.Feedback type='invalid'>
                    { errors?.last_name }
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email" >
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="email" 
                    isInvalid={!!errors?.email}
                    onChange={ e => setField('email', e.target.value) }
                />
                <Form.Control.Feedback type='invalid'>
                    { errors?.email }
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control 
                    type="phone" 
                    placeholder="Phone" 
                    isInvalid={!!errors?.phone}
                    onChange={ e => setField('phone', e.target.value) }
                />
                <Form.Control.Feedback type='invalid'>
                    { errors?.phone }
                </Form.Control.Feedback>
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
           addUser(dispatch, user)
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)