// Imported React library.
import React from "react";
// Imported components from Bootstrap.
import { Row, Col, Card, Button } from "react-bootstrap";

/**
 * Utilized Bootstrap components to create the Home page.
 * @returns Home page that displays the available quiz topics and links to the quiz.
 */

const Home = () => {
  return (
    <div>
      <Row>
        <Col className="col-md-2 intro-paragraph">
          <h4>HOW TECH-SAVVY ARE YOU?</h4>
          <p>...</p>
          <ol>
            <li>Select the preferred topic.</li>
            <li>Select the preferred difficulty.</li>
            <li>Each selection generates 10 multiple choice questions.</li>
            <li>Visit the dashboard to check the records of your results.</li>
          </ol>
          <p>...</p>
          <p>...</p>
        </Col>
        <Col className="col-md-9">
          <Row>
            <Col>
              <Card className="topic-card">
                <Card.Img
                  src="./images/linux.png"
                  alt=""
                  className="topic-image"
                  fluid="true"
                />
                <div className="topic-image-overlay topic-image-overlay-blur">
                  <Card.Title className="topic-title">LINUX</Card.Title>
                  <Card.Text>Take The Quiz</Card.Text>
                  <Row>
                    <Button className="difficulty-button">Easy</Button>
                    <Button className="difficulty-button">Medium</Button>
                    <Button className="difficulty-button">Hard</Button>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="topic-card">
                <Card.Img
                  src="./images/docker.png"
                  alt=""
                  className="topic-image"
                  fluid="true"
                />
                <div className="topic-image-overlay topic-image-overlay-blur">
                  <Card.Title className="topic-title">DOCKER</Card.Title>
                  <Card.Text>Take The Quiz</Card.Text>
                  <Row>
                    <Button className="difficulty-button">Easy</Button>
                    <Button className="difficulty-button">Medium</Button>
                    <Button className="difficulty-button">Hard</Button>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="topic-card">
                <Card.Img
                  src="./images/sql.png"
                  alt=""
                  className="topic-image"
                  fluid="true"
                />
                <div className="topic-image-overlay topic-image-overlay-blur">
                  <Card.Title className="topic-title">SQL</Card.Title>
                  <Card.Text>Take The Quiz</Card.Text>
                  <Row>
                    <Button className="difficulty-button">Easy</Button>
                    <Button className="difficulty-button">Medium</Button>
                    <Button className="difficulty-button">Hard</Button>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="topic-card">
                <Card.Img
                  src="./images/code.png"
                  alt=""
                  className="topic-image"
                  fluid="true"
                />
                <div className="topic-image-overlay topic-image-overlay-blur">
                  <Card.Title className="topic-title">CODE</Card.Title>
                  <h6>JAVASCRIPT, HTML, PHP</h6>
                  <Card.Text>Take The Quiz</Card.Text>
                  <Row>
                    <Button className="difficulty-button">Easy</Button>
                    <Button className="difficulty-button">Medium</Button>
                    <Button className="difficulty-button">Hard</Button>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="topic-card">
                <Card.Img
                  src="./images/devops.png"
                  alt=""
                  className="topic-image"
                  fluid="true"
                />
                <div className="topic-image-overlay topic-image-overlay-blur">
                  <Card.Title className="topic-title">DEVOPS</Card.Title>
                  <Card.Text>Take The Quiz</Card.Text>
                  <Row>
                    <Button className="difficulty-button">Easy</Button>
                    <Button className="difficulty-button">Medium</Button>
                    <Button className="difficulty-button">Hard</Button>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="topic-card">
                <Card.Img
                  src="./images/bash.png"
                  alt=""
                  className="topic-image"
                  fluid="true"
                />
                <div className="topic-image-overlay topic-image-overlay-blur">
                  <Card.Title className="topic-title">BASH</Card.Title>
                  <Card.Text>Take The Quiz</Card.Text>
                  <Row>
                    <Button className="difficulty-button">Easy</Button>
                    <Button className="difficulty-button">Medium</Button>
                    <Button className="difficulty-button">Hard</Button>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

// Exporting Home.js to App.js.
export default Home;