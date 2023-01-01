import React from 'react'
import './SignUp.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useForm } from "react-hook-form";

function SignUp() {   

  
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {

    console.log(data);
    console.log('gggggggggggggg');

  
    try{
      const rrr = await axios.post('/server/auth/register',data)
      console.log(rrr);
      console.log('rrrrrrrrrrrrggggggg');
  }
  catch(err){
      console.log(err)
  }
    
  }




      return (


<div className="container col-md-4 bg-dark text-light">
    <div className="row m-4">
<h3 className='mt-3'>User Registration </h3>

<Form onSubmit={handleSubmit(onSubmit)}>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Name</Form.Label>
<Form.Control type="text" placeholder="Enter name" 
{...register("name")}
/>
<Form.Text className="text-muted">
</Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email</Form.Label>
<Form.Control type="email" placeholder="Enter email" 
{...register("email")}
/>
<Form.Text className="text-muted">
</Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Phone Number</Form.Label>
<Form.Control type="Number" placeholder="Enter Phone Number" 
{...register("phoneNumber")}
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

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Addresss</Form.Label>
<Form.Control type="text" placeholder="Enter Address" 
{...register("address")}
/>
<Form.Text className="text-muted">
</Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Age</Form.Label>
<Form.Control type="Number" placeholder="Enter age"
{...register("age")}
/>
<Form.Text className="text-muted">
</Form.Text>
</Form.Group>

<Button variant="info" className='mb-4' type="submit">
Submit
</Button>
</Form>

</div>
</div>
);

    
}

export default SignUp



