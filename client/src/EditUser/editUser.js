import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenAlt} from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useForm } from "react-hook-form";




function EditUser(props) {

console.log(props);
console.log('yyyyyyyyyyyyyyyyyy');


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


const { register, handleSubmit, formState: { errors } } = useForm();


const onSubmit = async(data) => {
  
  try{
    const editUser = await axios.put(`/server/user/${props.id}`,data)
     props.reload()

}
catch(err){
    console.log(err)
}
  
}


  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Edit
      </Button> */}
      <FontAwesomeIcon onClick={handleShow} className='edit-icon' icon={faPenAlt} color='green' font-size='x-large'></FontAwesomeIcon> 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>




<Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" defaultValue={props.name}
        
        {...register("name")}

        />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="Number" defaultValue={props.phone}
        
        {...register("phoneNumber")}
        
        />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" defaultValue={props.email}
        
        {...register("email")}

        />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Button type='submit'>Submit</Button>
      </Form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={()=>{editUser(props.id)}}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default EditUser