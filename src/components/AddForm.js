import { Form, Button } from 'react-bootstrap';
import {EmployeeContext} from '../contexts/EmployeeContext';
import {useContext, useState} from 'react';
const AddForm = () => {

    const {dispatch} = useContext(EmployeeContext);

    const [newEmployee,setNewEmployee] = useState ({
        name:"",email:"",address:"",phone:""
    })

    const {name,email,address,phone} = newEmployee

    const onInputChange = e => {
        setNewEmployee({...newEmployee,[e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'add_employee',employee:{
            name,email,address,phone
        }})
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={e => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={e => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={e => onInputChange(e)}
                    rows={3}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={e => onInputChange(e)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Employee
            </Button>
        </Form>
    )

}

export default AddForm;