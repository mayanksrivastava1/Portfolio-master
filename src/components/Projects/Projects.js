import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import force from "../../Assets/Projects/force.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/fooddelivery.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="IIITU Connect"
              description="A online community for IIIT Una students built with MERN Stack.
              Engage with fellow alumni and sudents through posts, likes, and threaded discussions, with comprehensive CRUD operations ensuring smooth interaction and management."
              ghLink="https://github.com/mayanksrivastava1/IIITU-Connect"
              demoLink="https://github.com/mayanksrivastava1/IIITU-Connect"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Go-Food"
              description="Developed a web portal for taking Online Food Delivery.
              This Website uses MongoDB database for storing user data.
              Implemented features like adding grocery to cart which affects quantity and total amount and also updates items in the Cart."
              ghLink="https://github.com/mayanksrivastava1/foodelivery"
              demoLink="https://comforting-semifreddo-1ca572.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={force}
              isBlog={false}
              title="Force - Forum of Computer Engineers"
              description="Developed a Force Club Website for Skill - Abhyudaya Web Development Competition and secured 1st Place in this competition.
              Its a Multi-page static website for our college club with a engaging and interactive UI."
              ghLink="https://github.com/mayanksrivastava1/FORCE-IIITUna.com-main"
              demoLink="https://mayanksrivastava1.github.io/FORCE-IIITUna.com-main/index.html"              
            />
          </Col>

        


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
