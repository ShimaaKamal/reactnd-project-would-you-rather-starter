import React, { Component } from "react";
import { Card, Button, Form, Col, Row } from "react-bootstrap";
import logo from "../logo.svg";

class QuestionDetails extends Component {
  render() {
    return (
      <div className="question-container">
        <Card>
          <Card.Header as="h5">Shimaa asks</Card.Header>
          <Card.Body>
            <div className="question">
              <div className="author-avatar-container">
                <img src={logo} className="user-logo" alt="logo" />
              </div>

              <div className="question-info">
                <h3>Would you Rather?</h3>
                <fieldset>
                  <Form.Group as={Row}>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="first radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="second radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
                <Button>Submit</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default QuestionDetails;
