import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import NewForm from './newForm';
import EditForm from './editForm';

const InputModal = props => {
  const {handleChange, handleSubmit, handleClose, show, retrievedTrees, buttonType} = props;

  const submitAndClose = (event) => {
    handleSubmit(event, buttonType);
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{`Create child of ${retrievedTrees.type}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {buttonType === 'newIntent' || buttonType === 'newTree' || buttonType === 'newAnswer' ? (
          <NewForm handleChange={handleChange} retrievedTrees={retrievedTrees} buttonType={buttonType}/>
        ) : (
          <EditForm handleChange={handleChange} retrievedTrees={retrievedTrees} buttonType={buttonType}/>
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

export default InputModal;
