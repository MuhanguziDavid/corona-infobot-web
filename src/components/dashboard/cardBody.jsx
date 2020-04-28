import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col, Card, Spinner } from 'react-bootstrap';
import TreesTable from './treesTable';

const CardBody = props => {
  const { handleSubmit, handleClick, getTrees, retrievedTrees, isLoading, parentType, handleButtonType, handleShow } = props;

  return (
    <React.Fragment>
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
              <React.Fragment>
                <Col>
                  <Button variant="dark btn-block" type="submit" onClick={() => {handleButtonType('editTree'); handleShow();}}>
                    Edit tree
                  </Button>
                </Col>
                <Col>
                  <Button variant="dark btn-block" type="submit" onClick={() => {handleButtonType('deleteTree'); handleShow();}}>
                    Delete tree
                  </Button>
                </Col>
                <Col>
                  <Button variant="dark btn-block" type="submit" onClick={() => {handleButtonType('newIntent'); handleShow();}}>
                    New Intent
                  </Button>
                </Col>
              </React.Fragment>
            ) : (
              // intent
              retrievedTrees.type === 'intent' ? (
                <React.Fragment>
                  <Col>
                    <Button variant="dark btn-block" type="submit" onClick={() => {handleButtonType('editIntent'); handleShow();}}>
                      Edit Intent
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="dark btn-block" type="submit" onClick={() => {handleButtonType('deleteIntent'); handleShow();}}>
                      Delete Intent
                    </Button>
                  </Col>

                  {retrievedTrees.payloadData.length > 0 ? (
                    null
                  ) : (
                    <React.Fragment>
                      <Col>
                        <Button variant="dark btn-block" type="submit" onClick={() => {handleButtonType('newTree'); handleShow();}}>
                          New Tree
                        </Button>
                      </Col>
                      <Col>
                        <Button variant="dark btn-block" type="submit" onClick={() => {handleButtonType('newAnswer'); handleShow();}}>
                          New Answer
                        </Button>
                      </Col>
                    </React.Fragment>
                  )}
                </React.Fragment>
              ) : (
                // answer
                <React.Fragment>
                  <Col>
                    <Button variant="dark btn-block" type="submit" onClick={() => {handleButtonType('editAnswer'); handleShow();}}>
                      Edit Answer
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="dark btn-block" type="submit" onClick={() => {handleButtonType('deleteAnswer'); handleShow();}}>
                      Delete Answer
                    </Button>
                  </Col>
                </React.Fragment>
              )
            )
          )}
        </Row>
      </Card.Body>
    </React.Fragment>
  )
}

CardBody.propTypes = {
  retrievedTrees: PropTypes.object,
};

CardBody.defaultProps = {
  retrievedTrees: {
    title: '',
    type: ''
  },
};

export default CardBody;
