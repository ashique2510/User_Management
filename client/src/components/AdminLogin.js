import React, { useState } from 'react'
import './SignUp.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


function AdminLogin() {

  const navigate=useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {

    console.log(data);
    console.log('gggggggggggggg');

  
    try{
      const goToPanel = await axios.post('/server/auth/login',data)
      navigate("/adminpanel")
     
  }
  catch(err){
      console.log(err)
  }
    
  }



  return (

    <div className="container col-md-4 bg-dark text-light mt-5">
        <div className="row m-4">
    <h3 className='mt-3'>Log In</h3>

<Form onSubmit={handleSubmit(onSubmit)}>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" 
    {...register("email")}
    />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    {...register("password")}
    />
  </Form.Group>
 
  <Button variant="info" className='mb-4' type="submit">
    Submit
  </Button>
  </Form>

  </div>
    </div>
);
}

export default AdminLogin