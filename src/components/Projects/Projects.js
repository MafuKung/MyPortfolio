import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BIProject from "../../Assets/Projects/BI Project.png";
import minigame from "../../Assets/Projects/StartScreen.png";
import tamsang from "../../Assets/Projects/TamSang CRUD.png";
import SE from "../../Assets/Projects/SE-termproject.jpg";
import AIchat from "../../Assets/Projects/AI Chatbot.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>and <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are some projects that I have worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tamsang}
              isBlog={false}
              title="React App - TamSang CRUD"
              description="A group term project of basic CRUD."
              ghLink="https://github.com/PhupaSirirat/tamsang-crud#react-app---tamsang-crud"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BIProject}
              isBlog={false}
              title="Business intelligent project"
              description="Business Intelligence Project Assignment, Datamine AdventureWork dataset and visualize by Tableau."
              ghLink="https://github.com/Lolidezu/DataMineTableau"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minigame}
              isBlog={false}
              title="Mini 2D Game"
              description="Mini 2D game in term project first year with Java by using Apache NetBeans."
              ghLink="https://github.com/MafuKung/Mini-2D-Game"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SE}
              isBlog={false}
              title="Mobile application for disabled people to navigate public transportation"
              description="Project on developing a mobile application for disabled people to navigate public transportation for the course SOFTWARE ENGINEERING METHODOLOGY AND DEVELOPMENT. The aim is to find public transit routes catering to the needs of disabled individuals who are unable to walk independently."
              ghLink="https://github.com/PhupaSirirat/SE-TermProject"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AIchat}
              isBlog={false}
              title=" A Chatbot for Learning Space Help Desk for OCSC Learning Space (In progress)"
              description="A Chatbot for Learning Space Help Desk for OCSC Learning Space (In progress) A senior project about integrates Generative AI to assist in answering user question about a OCSC Learning Space website in place of the support team."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
