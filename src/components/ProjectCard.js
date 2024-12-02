// src/components/ProjectCard.js
import React from 'react';
import { Card } from 'react-bootstrap';
import projectImage from '../images/Screenshot 2024-12-02 101713.png'; // Adjust the path as needed
import creatorImage from '../images/killuacat.webp'; // Add the path for the creator's profile image

const ProjectCard = () => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={projectImage} alt="Project Thumbnail" />
      <Card.Body>
        <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
        <div className="d-flex align-items-center mb-2">
          <img
            src={creatorImage}
            alt="Creator Profile"
            className="rounded-circle me-2"
            style={{ width: '40px', height: '40px' }}
          />
          <span>Bryan Liem</span>
        </div>
        <Card.Text>
          10 days left · 50% funded
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;