import React, { useState} from 'react';
import { Button, Row, Col, Card, Spinner } from 'react-bootstrap';
import TreesTable from './treesTable';

const TreesCard = props => {
  const { handleChange, handleSubmit, handleClick, retrievedTrees, isLoading } = props;
  console.log('retrievedTrees', retrievedTrees.data);

  return (
    <React.Fragment>
      <Card>
        <Card.Header as="h3">{retrievedTrees.data === undefined ? 'Trees' : retrievedTrees.data.body || retrievedTrees.data.title }</Card.Header>
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
            {retrievedTrees.data ? (
              <React.Fragment>
                <Col>
                  <Button variant="dark btn-block" type="submit">
                    New Tree
                  </Button>
                </Col>
              </React.Fragment>
            ) : (
              <Col>
                <Button variant="dark btn-block" type="submit">
                  Intent
                </Button>
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default TreesCard;
