import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <span className="float-right">
          <Button variant="primary" type="submit">
            Login
          </Button>{" "}
          <Button variant="success" type="submit">
            Register
          </Button>
        </span>
      </Form>
    );
  }
}

export default Login;
