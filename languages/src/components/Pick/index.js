import React, { Component } from "react";

// Stylesheets
import "./styles.css";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

// Components
import Hour from "../Hour";
import Week from "../Week";
import Map from "../Map";
import Table from "../Table";

// COMPONENT CODE BEGINS
/**
 * About page describes the different categories
 * of language data.
 *  @return {any} JSX content
 */
class About extends Component {
  render() {
    return (
      <div>
        <div id="title-card">
          <h1><br />Picking a language</h1>
        </div>
        <Container>
          <Row>
            <Col id="intro">
              <p> <strong>So you're ready to begin learning a second language.</strong> But how do you know which language is right for you? </p>
              <p>Use our interactive graphs below to discover which languages might best fit your schedule or travel plans. Then, head over to our resources section to find the tools that will help you master your skills.</p>
              <p><em>Keep in mind that the information below is based on averages; the ability of an individual to learn a new language may vary based on background, experience, natural ability, and quality of instruction.</em></p>
            </Col>
          </Row>
        </Container>

        {/* Tabs */}
        <div id="category-tabs">
          <Tab.Container defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">By hour</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">By week</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">By location</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              {/* CHART ONE */}
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <h1 className="section-header">By hour</h1>
                    <Row>
                      <Col className="caption"><p>Estimates the number of hours it takes to learn a particular language.</p></Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="small-header">The data:</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col></Col>
                      <Col></Col>
                    </Row>
                  </Tab.Pane>


                  {/* CHART TWO */}
                  <Tab.Pane eventKey="second">
                    <h1 className="section-header">By week</h1>
                    <Row>
                      <Col className="caption"><p>Estimates the number of weeks it takes to learn a particular language.</p></Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="small-header">The data:</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col></Col>
                      <Col></Col>
                    </Row>
                  </Tab.Pane>


                  {/* CHART THREE - MAP*/}
                  <Tab.Pane eventKey="third">
                    <h1 className="section-header">By location</h1>
                    <Row>
                      <Col className="caption"><p>Determines which regions of the world contain the highest concentration of each level of language difficulty.</p></Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="small-header">The data:</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col><div id="map"></div></Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
  }
}
export default About;