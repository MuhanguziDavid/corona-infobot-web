import React, { useState} from 'react';
import { Button, Row, Col, Card, Spinner } from 'react-bootstrap';
import TreesTable from './treesTable';

const TreesCard = props => {
  const { handleChange, handleSubmit, handleClick, getTrees, retrievedTrees, isLoading } = props;
  let parentType;
  if ((retrievedTrees && retrievedTrees.type === 'tree') || (retrievedTrees && retrievedTrees.type === 'answer')) {
    parentType = 'intent'
  } else {
    parentType = 'tree'
  }
  console.log('retrievedTrees', retrievedTrees);

  return (
    <React.Fragment>
      <Card>
        <Card.Header as="h3">{ (retrievedTrees && retrievedTrees.title) || (retrievedTrees && retrievedTrees.body) }</Card.Header>
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
          <Row>
            {/* back buttons */}
            {/* intent, answer, and tree with a parent */}
            {(retrievedTrees && retrievedTrees.type === "tree" && retrievedTrees.parent) || (retrievedTrees && retrievedTrees.type === "intent") || (retrievedTrees && retrievedTrees.type === "answer") ? (
              <Col>
                <Button variant="dark btn-block" type="submit" onClick={() => handleClick(retrievedTrees.parent, parentType)}>
                  Back
                </Button>
              </Col>
            ) : (
              // tree list 
              retrievedTrees && retrievedTrees.type === "treeList" ?
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
            {retrievedTrees && retrievedTrees.type === "treeList" ? (
              <Col>
                <Button variant="dark btn-block" type="submit">
                  New Tree
                </Button>
              </Col>
            ) : (
              // tree
              retrievedTrees && retrievedTrees.type === 'tree' ? (
                <Col>
                  <Button variant="dark btn-block" type="submit">
                    New Intent
                  </Button>
                </Col>
              ) : (
                // intent
                retrievedTrees && retrievedTrees.type === 'intent' ? (
                  <React.Fragment>
                    <Col>
                      <Button variant="dark btn-block" type="submit">
                        New Tree
                      </Button>
                    </Col>
                    <Col>
                      <Button variant="dark btn-block" type="submit">
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
    </React.Fragment>
  )
}

export default TreesCard;
