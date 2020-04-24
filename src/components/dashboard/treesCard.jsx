import React, { useState} from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import TreesTable from './treesTable';

const TreesCard = props => {
  const { handleChange, handleSubmit, retrievedTrees, isLoading } = props;

  return (
    <React.Fragment>
      <Card>
        <Card.Header as="h3">Trees</Card.Header>
        <Card.Body>
          <Row>
            <Col>
              {retrievedTrees
                ? (
                  <React.Fragment>
                    {Object.keys(retrievedTrees).length > 0
                      && <TreesTable retrievedTrees={retrievedTrees} />
                    }
                  </React.Fragment>
                )
                : (
                  <p>No information available</p>
                )
              }
            </Col>
          </Row>
          <Row>
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
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default TreesCard;
