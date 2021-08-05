import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import { addGroup } from '../../actions'
import 'bootstrap/dist/css/bootstrap.min.css';

const AddGroup = (props) => {
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
            formData.id = `G_${props.groups?.length + 100}`
            props.addGroup(formData)
            props.history.push('/groups')
        }
    }

    const checkErrors = () => {
        const { name, admin } = formData
        const newErrors = {}
        if ( !name || name === '' ) newErrors.name = 'Group name cannot be blank!'
        if ( !admin || admin === '' ) newErrors.admin = 'Admin field cannot be blank!'
        return newErrors
    }

    return(
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Group Name</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Group name" 
                    isInvalid={!!errors?.first_name}
                    onChange={ e => setField('name', e.target.value) }
                />
                <Form.Control.Feedback type='invalid'>
                    { errors?.group_name }
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="admin" >
                <Form.Label>Admin</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Admin name"
                    isInvalid={!!errors?.admin}
                    onChange={ e => setField('admin', e.target.value) }
                />
                <Form.Control.Feedback type='invalid'>
                    { errors?.admin_name }
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
      groups: state.groups 
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
       addGroup: (groups) => {
        addGroup(dispatch, groups)
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGroup)