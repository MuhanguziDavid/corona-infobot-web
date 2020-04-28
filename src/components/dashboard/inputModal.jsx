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
          buttonType === 'editIntent' || buttonType === 'editTree' || buttonType === 'editAnswer' ? (
            <EditForm handleChange={handleChange} retrievedTrees={retrievedTrees} buttonType={buttonType}/>
          ) : (
            <React.Fragment>
              Are you sure you want to delete this item and it's children?
            </React.Fragment>
          )
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submitAndClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default InputModal;
