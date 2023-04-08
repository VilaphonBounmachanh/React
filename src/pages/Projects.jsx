import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
// import lift from "../assets/projects/lift.png";
// import krypto from "../assets/projects/krypto.png";
// import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="medicine_app_ui"
              description="I learned from youtube"
              ghLink="https://github.com/19sajib/lift-buddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="mini pos "
              description="I work with vue.js"
              ghLink="https://github.com/VilaphonBounmachanh/mini_pos_phon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Bank App"
              description="i work with flutter in thaddum"
              ghLink="https://github.com/VilaphonBounmachanh/Bank"
            />
          </Col>

        
        

      
        </Row>
      </Container>
    </Container>
  )
}

export default Projects