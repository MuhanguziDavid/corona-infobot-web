import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import './authentication.scss'


const SignupForm = props => {
  const {handleChange, handleSubmit, firstName, lastName, email, password, confirm_password, isLoading} = props;
  return (
    <div className="authentication-container">
      <h2 className="authentication-container__title">Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Control type="text" name="firstName" placeholder="first name" value={firstName} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Control type="text" name="lastName" placeholder="last name" value={lastName} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control type="email" name="email" placeholder="email" value={email} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control type="password" name="password" placeholder="password" value={password} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="confirm_password">
          <Form.Control type="password" name="confirm_password" placeholder="confirm password" value={confirm_password} onChange={handleChange} />
        </Form.Group>
        {
          !isLoading && 
          <Button variant="dark btn-block" type="submit">
            Submit
          </Button>
        }
        {
          isLoading && <div className="authentication-container__spinner">
            <Spinner animation="grow" />
          </div> 
        }
        <p className="authentication-container__link">Already have an account?<a href="/login">Login</a></p>
      </Form>
    </div>
  )
}

export default SignupForm;
