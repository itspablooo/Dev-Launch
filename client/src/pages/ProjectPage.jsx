import React, { useState } from 'react';
import { Container, Row, Col, Image, ProgressBar, ListGroup } from 'react-bootstrap';

const ProjectPage = () => {
  const [donationGoal] = useState(10000);
  const [totalDonations, setTotalDonations] = useState(5000);
  const [donors] = useState([
    { id: 1, name: 'John Doe', amount: 100 },
    { id: 2, name: 'Jane Smith', amount: 200 },
    { id: 3, name: 'Anonymous', amount: 50 },
  ]);

  const progressPercentage = (totalDonations / donationGoal) * 100;

  return (
    <Container style={{ backgroundColor: '#e0f2f1', padding: '20px', borderRadius: '10px' }}>
      <Row>
        <Col>
          <h1 style={{ color: '#0277bd' }}>Project Title</h1>
          <p style={{ color: '#0277bd' }}>Description of the project goes here.</p>
          <Image src="project-image.jpg" fluid />
          <ProgressBar now={progressPercentage} label={`${progressPercentage.toFixed(2)}%`} />
          <p style={{ color: '#0277bd' }}>Raised: ${totalDonations} of ${donationGoal}</p>
        </Col>
        <Col>
          <h2 style={{ color: '#0277bd' }}>Recent Donors</h2>
          <ListGroup>
            {donors.map(donor => (
              <ListGroup.Item key={donor.id} style={{ backgroundColor: 'white', color: '#0277bd' }}>
                {donor.name} donated ${donor.amount}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectPage;
