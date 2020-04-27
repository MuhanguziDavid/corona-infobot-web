import React from 'react';
import { Form } from 'react-bootstrap';

const NewForm = props => {
  const {handleChange, retrievedTrees, buttonType} = props;

  const handleIntent = () => {
    return (
      <Form>
        {buttonType === 'newTree' ? (
          // new tree
          <Form.Group controlId="title">
            <Form.Control type="text" placeholder="title" name="title" onChange={handleChange}/>
          </Form.Group>
        ) : (
          // new answer
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
    <React.Fragment>
      {retrievedTrees.type === 'intent' ? (
        handleIntent()
      ) : (
        // new intent
        <Form>
          <Form.Group controlId="name">
            <Form.Control type="text" placeholder="name" name="name" onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="body">
            <Form.Control type="text" placeholder="body" name="body" onChange={handleChange}/>
          </Form.Group>
        </Form>
      )}
    </React.Fragment>
  )
}

export default NewForm;
