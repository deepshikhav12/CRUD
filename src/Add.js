import React, {useState} from "react";
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from "./employee";
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom';


function Add(){
    const[first,setFirst]=useState('');
    const[last,setLast]=useState('');
    const[email,setEmail]=useState('');
    // const[age,setAge]=useState('');
    let history=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const ids=uuid();
        let uniqueId=ids.slice(0,8);

        let a=first;
        let b=last;
        let c=email;
        Employee.push({id:uniqueId,First:a,Last:b,Email:c})
        history("/");
    }

    return <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}> 
        <Form.Group className="mb-3" controlId="formFirst">
            <Form.Control type="text" placeholder="Enter First Name" required onChange={(e)=>setFirst(e.target.value)}>

            </Form.Control>

        </Form.Group>
        <Form.Group className="mb-3" controlId="formLast">
            <Form.Control type="text" placeholder="Enter Last Name" required onChange={(e)=>setLast(e.target.value)}>

            </Form.Control>

        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control type="text" placeholder="Enter Email" required onChange={(e)=>setEmail(e.target.value)}>

            </Form.Control>

        </Form.Group>
            <Button onClick={(e)=>handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>
}
export default Add;