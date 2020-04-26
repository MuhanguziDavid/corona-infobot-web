import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TreesCard from './treesCard';
import './dashboard.scss';

const Dashboard = props => {
  const {handleChange, handleSubmit, handleClick, retrievedTrees, isLoading } = props;

  return (
    <Container>
      <Row className="dashboard-container">
        <Col className="dashboard-container__card2">
          <TreesCard
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleClick={handleClick}
            retrievedTrees={retrievedTrees}
            isLoading={isLoading}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard;