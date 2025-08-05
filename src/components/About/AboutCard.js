import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "start" }}>
            Hello, I'm <span className="purple">Siramet Sinkhruesuan</span>,
            a recent graduate with a <span className="purple">B.Sc. in Computer Science</span>
            from <span className="purple">Chulalongkorn University</span>.
            <br />
            <br />
            I have hands-on experience in <span className="purple">full-stack web development</span> from my internship at Quantium Technology, where I built and maintained enterprise-level applications using <span className="purple">Angular, .NET (C#), MongoDB</span>, and <span className="purple">SQL Server</span>.
            <br />
            <br />
            I enjoy solving real-world problems using modern technologies like <span className="purple">React, Node.js, NestJS</span>, and have a growing interest in <span className="purple">AI and chatbot development</span>.
            <br />
            <br />
            Outside of coding, I enjoy these activities:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Live in the present, face the future, and make the most of today"
          </p>
          <footer className="blockquote-footer">Me</footer>
        </blockquote>
      </Card.Body>
    </Card>

  );
}

export default AboutCard;
