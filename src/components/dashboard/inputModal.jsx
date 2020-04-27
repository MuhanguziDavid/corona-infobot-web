import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const TransactionsModal = props => {
  const {handleChange, handleSubmit, handleClose, handleShow, show, retrievedTrees, buttonType} = props;

  const submitAndClose = (event) => {
    handleSubmit(event, buttonType);
    handleClose();
  }

  const handleIntent = (event) => {
    return (
      <Form>
        {buttonType === 'newTree' ? (
          <Form.Group controlId="title">
            <Form.Control type="text" placeholder="title" name="title" onChange={handleChange}/>
          </Form.Group>
        ) : (
          <React.Fragment>
            <Form.Group controlId="title">
              <Form.Control type="text" placeholder="title" name="title" onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="body">
              <Form.Control type="text" placeholder="body" name="body" onChange={handleChange}/>
            </Form.Group>
          </React.Fragment>
        )}

      </Form>
    )
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{`Create child of ${retrievedTrees.type}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {retrievedTrees.type === 'intent' ? (
          handleIntent()
        ) : (
          <Form>
            <Form.Group controlId="name">
              <Form.Control type="text" placeholder="name" name="name" onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="body">
              <Form.Control type="text" placeholder="body" name="body" onChange={handleChange}/>
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submitAndClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TransactionsModal;
