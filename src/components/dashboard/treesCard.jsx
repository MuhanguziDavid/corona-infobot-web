import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import InputModal from './inputModal';
import CardBody from './cardBody';

const TreesCard = props => {
  const { handleChange, handleSubmit, handleClick, getTrees, retrievedTrees, isLoading } = props;
  let parentType;
  if ((retrievedTrees.type === 'tree') || (retrievedTrees.type === 'answer')) {
    parentType = 'intent'
  } else {
    parentType = 'tree'
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [buttonType, setButtonType] = useState('');
  const handleButtonType = (value) => setButtonType(value);

  console.log('retrievedTrees', retrievedTrees);

  return (
    <React.Fragment>
      <Card>
        <Card.Header as="h3">{ (retrievedTrees.title) || (retrievedTrees.body) }</Card.Header>
        <CardBody
          handleSubmit={handleSubmit}
          handleClick={handleClick}
          getTrees={getTrees}
          retrievedTrees={retrievedTrees}
          isLoading={isLoading}
          parentType={parentType}
          handleButtonType={handleButtonType}
          handleShow={handleShow}
        />
      </Card>


      <InputModal
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        retrievedTrees={retrievedTrees}
        buttonType={buttonType}
      />
    </React.Fragment>
  )
}

TreesCard.propTypes = {
  retrievedTrees: PropTypes.object,
};

TreesCard.defaultProps = {
  retrievedTrees: {
    title: '',
    type: ''
  },
};

export default TreesCard;
