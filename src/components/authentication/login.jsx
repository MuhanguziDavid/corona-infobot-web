import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import './authentication.scss';


const LoginComponent = ({handleChange, isLoading, handleSubmit}) => {
  return (
    <>
      <div className="authentication-container">
        <h2 className="authentication-container__title">Login</h2>
        <Form>
          <Form.Group controlId="phoneNumber">
            <Form.Control type="text" placeholder="email" name="email" onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control type="password" placeholder="password" name="password" onChange={handleChange}/>
          </Form.Group>
          {
            !isLoading && 
            <Button variant="dark btn-block" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          }
          {
            isLoading && <div className="authentication-container__spinner">
              <Spinner animation="grow" />
            </div> 
          }
          <p className="authentication-container__link">Don't have an account?<a href="/signup">Sign Up</a></p>
        </Form>
      </div>
    </>
  )
}


export default LoginComponent
