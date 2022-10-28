import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from "./employee";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Update() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  var index = Employee.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Employee[index];
    a.First = first;
    a.Last=last;
    a.Email = email;
    history("/");
  };

  useEffect(() => {
    setFirst(localStorage.getItem("First"));
    setLast(localStorage.getItem("Last"));
    setEmail(localStorage.getItem("Email"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formFirst">
          <Form.Control
            type="text"
            placeholder="Enter first Name"
            value={first}
            required
            onChange={(e) => setFirst(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLast">
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={last}
            required
            onChange={(e) => setLast(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
export default Update;
