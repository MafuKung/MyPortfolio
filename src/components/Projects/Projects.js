import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BIProject from "../../Assets/Projects/BI Project.png";
import minigame from "../../Assets/Projects/StartScreen.png";
import tamsang from "../../Assets/Projects/TamSang CRUD.png";
import SE from "../../Assets/Projects/SE-termproject.jpg";
import AIchat from "../../Assets/Projects/AI Chatbot.png";
import Ecom from "../../Assets/Projects/E-commerce.png";
import NextFlix from "../../Assets/Projects/NextFlixIcon.png";

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
            // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BIProject}
              isBlog={false}
              title="Business intelligent project"
              description="Business Intelligence Project Assignment, Datamine AdventureWork dataset and visualize by Tableau."
              ghLink="https://github.com/Lolidezu/DataMineTableau"
            // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minigame}
              isBlog={false}
              title="Mini 2D Game"
              description="Mini 2D game in term project first year with Java by using Apache NetBeans."
              ghLink="https://github.com/MafuKung/Mini-2D-Game"
            // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SE}
              isBlog={false}
              title="Mobile application for disabled people to navigate public transportation"
              description="Project on developing a mobile application for disabled people to navigate public transportation for the course SOFTWARE ENGINEERING METHODOLOGY AND DEVELOPMENT. The aim is to find public transit routes catering to the needs of disabled individuals who are unable to walk independently."
              ghLink="https://github.com/PhupaSirirat/SE-TermProject"
            // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecom}
              isBlog={false}
              title="E-commerce website"
              description="Developed a full-stack e-commerce website using React, Express.JS and MongoDB, enabling users to browse products and add to cart."
              ghLink="https://github.com/MafuKung/DDB-Project-E-Commerce"
            // demoLink="" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AIchat}
              isBlog={false}
              title="Generative AI Chatbot for OCSC Learning Space"
              description="A senior project that integrates Generative AI to assist users of the OCSC Learning Space platform by answering FAQs and reducing support workload. Built using React, .NET (C#), SQL, OpenAI API, and Postman for backend integration."
            // demoLink="https://your-demo-link.com" //
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NextFlix}
              isBlog={false}
              title="Nextflix — Full-Stack Movie App"
              description="A Netflix-inspired web application built with Next.js and NestJS. Includes responsive UI, movie detail pages, YouTube trailer modals, and TMDB API integration. Backend follows Clean Architecture with auto-documented REST APIs (Apidog)."
              ghLink="https://github.com/MafuKung/Nextflix-Project---Frontend"
              demoLink="https://nextflix-project-frontend.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
