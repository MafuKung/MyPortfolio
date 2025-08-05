import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Myself02 from "../../Assets/Myself02.jpg";
import "./Home.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a recent graduate with a <b className="purple">Bachelor of Science in Computer Science</b> from
              <b className="purple"> Chulalongkorn University</b>, class of 2025. <br />
              <br />
              I have hands-on experience in <b className="purple">full-stack web development</b>, having worked
              with technologies like <b className="purple">React, Node.js, MongoDB, SQL,</b> and{" "}
              <b className="purple">.NET (C#)</b>.
              <br />
              <br />
              During my internship at Quantium Technology, I built and maintained real-world web applications in the
              <b className="purple"> private markets industry</b>, and collaborated in an Agile environment using{" "}
              <b className="purple">Azure DevOps</b> and <b className="purple">Trello</b>.
              <br />
              <br />
              I’m passionate about solving real-world problems through clean and scalable code, and I'm
              always eager to learn and adapt to new technologies.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Myself02} className="img-fluid profile-img" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MafuKung"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mafu_kung/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/siramet.sin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/siramet-sinkhruesuan-927903293/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
