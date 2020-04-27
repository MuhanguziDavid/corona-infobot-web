import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col, Card, Spinner } from 'react-bootstrap';
import TreesTable from './treesTable';
import InputModal from './inputModal';

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
  const handleTree = () => setButtonType('newTree');
  const handleIntent = () => setButtonType('newIntent');
  const handleAnswer = () => setButtonType('newAnswer');

  console.log('retrievedTrees', retrievedTrees);

  return (
    <React.Fragment>
      <Card>
        <Card.Header as="h3">{ (retrievedTrees.title) || (retrievedTrees.body) }</Card.Header>
        <Card.Body>
          <Row>
            <Col>
              {!isLoading ? (
                retrievedTrees ? (
                  <React.Fragment>
                    {Object.keys(retrievedTrees).length > 0
                      && <TreesTable
                        retrievedTrees={retrievedTrees}
                        handleSubmit={handleSubmit}
                        handleClick={handleClick}
                      />
                    }
                  </React.Fragment>
                )
                : (
                  <p>No information available</p>
                )
              ) : (
                isLoading &&
                <div className="authentication-container__spinner">
                  <Spinner animation="grow" />
                </div>
              )}
            </Col>
          </Row>


          {/* Buttons */}
          <Row>
            {/* back buttons */}
            {/* intent, answer, and tree with a parent */}
            {(retrievedTrees.type === "tree" && retrievedTrees.parent) ||
            (retrievedTrees.type === "intent") ||
            (retrievedTrees.type === "answer") ? (
              <Col>
                <Button variant="dark btn-block" type="submit" onClick={() => handleClick(retrievedTrees.parent, parentType)}>
                  Back
                </Button>
              </Col>
            ) : (
              // tree list 
              retrievedTrees.type === "treeList" ?
                null : (
                  // tree without parent
                  <Col>
                    <Button variant="dark btn-block" type="submit" onClick={getTrees}>
                      Main menu
                    </Button>
                  </Col>
                )
              )
            }

            {/* new and edit buttons */}
            {/* tree list */}
            {retrievedTrees.type === "treeList" ? (
              null
            ) : (
              // tree
              retrievedTrees.type === 'tree' ? (
                <Col>
                  <Button variant="dark btn-block" type="submit" onClick={() => {handleIntent(); handleShow();}}>
                    New Intent
                  </Button>
                </Col>
              ) : (
                // intent
                retrievedTrees.type === 'intent' ? (
                  <React.Fragment>
                    <Col>
                      <Button variant="dark btn-block" type="submit" onClick={() => {handleTree(); handleShow();}}>
                        New Tree
                      </Button>
                    </Col>
                    <Col>
                      <Button variant="dark btn-block" type="submit" onClick={() => {handleAnswer(); handleShow();}}>
                        New Answer
                      </Button>
                    </Col>
                  </React.Fragment>
                ) : (
                  // answer
                  <React.Fragment>
                    <Col>
                      <Button variant="dark btn-block" type="submit">
                        Edit Answer
                      </Button>
                    </Col>
                    <Col>
                      <Button variant="dark btn-block" type="submit">
                        Delete Answer
                      </Button>
                    </Col>
                  </React.Fragment>
                )
              )
            )}
          </Row>
        </Card.Body>
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
