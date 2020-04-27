import React from 'react';
import { Form } from 'react-bootstrap';

const EditForm = props => {
  const {handleChange, retrievedTrees, buttonType} = props;

  const handleTreeAndAnswer = (event) => {
    return (
      <Form>
        {buttonType === 'editTree' ? (
          // edit tree
          <Form.Group controlId="title">
            <Form.Control type="text" placeholder="title" name="title" defaultValue={retrievedTrees.title} onChange={handleChange}/>
          </Form.Group>
        ) : (
          // edit answer
          <React.Fragment>
            <Form.Group controlId="title">
              <Form.Control type="text" placeholder="title" name="title" defaultValue={retrievedTrees.title} onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="body">
              <Form.Control type="text" placeholder="body" name="body" defaultValue={retrievedTrees.body} onChange={handleChange}/>
            </Form.Group>
          </React.Fragment>
        )}

      </Form>
    )
  }

  return (
    <React.Fragment>
      {buttonType === 'editIntent' ? (
        // edit intent
        <Form>
          <Form.Group controlId="name">
            <Form.Control type="text" placeholder="name" name="name"  defaultValue={retrievedTrees.name} onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="body">
            <Form.Control type="text" placeholder="body" name="body" defaultValue={retrievedTrees.body} onChange={handleChange}/>
          </Form.Group>
        </Form>
      ) : (
        handleTreeAndAnswer()
      )}
    </React.Fragment>
  )
}

export default EditForm;
