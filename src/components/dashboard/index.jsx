import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TreesCard from './treesCard';
import NavBar from '../navBar/navBar';
import Footer from '../footer/footer';
import './dashboard.scss';

const Dashboard = props => {
  const {handleChange, handleSubmit, handleClick, getTrees, retrievedTrees, isLoading } = props;

  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <Row className="dashboard-container">
          <Col className="dashboard-container__card2">
            <TreesCard
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleClick={handleClick}
              getTrees={getTrees}
              retrievedTrees={retrievedTrees}
              isLoading={isLoading}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default Dashboard;
