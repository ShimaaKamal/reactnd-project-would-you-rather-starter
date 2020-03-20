import React, { Component } from "react";
import { Card, Button, Form, Col, Row } from "react-bootstrap";
import { formatQuestion } from "../utils/helper";
import { connect } from "react-redux";

class QuestionAnswering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedText: props.question.questionOptionOneText
    };
  }

  handleOptionChange = e => {
    console.log("e.target.value", e.target.value);

    this.setState({
      selectedText: e.target.value
    });
  };

  handleSubmit = () => {};

  render() {
    const {
      questionOptionOneText,
      questionOptionTwoText,
      authorName,
      authorAvatar
    } = this.props.question;

    return (
      <div className="question-container align-self-center">
        <Card>
          <Card.Header as="h5">{authorName} asks</Card.Header>
          <Card.Body>
            <div className="question">
              <div className="author-avatar-container">
                <img
                  src={authorAvatar}
                  alt={`Avatar of ${authorName}`}
                  className="author-avatar"
                />
              </div>

              <div className="question-info">
                <h3>Would you Rather?</h3>
                <Form onSubmit={this.handleSubmit}>
                  <fieldset>
                    <Form.Group as={Row}>
                      <Col sm={10}>
                        <Form.Check
                          type="radio"
                          label={questionOptionOneText}
                          value={questionOptionOneText}
                          name="questionOptionText"
                          id={questionOptionOneText}
                          checked={
                            this.state.selectedText === questionOptionOneText
                          }
                          onChange={e => this.handleOptionChange(e)}
                        />
                        <Form.Check
                          type="radio"
                          label={questionOptionTwoText}
                          value={questionOptionTwoText}
                          name="questionOptionText"
                          id={questionOptionTwoText}
                          checked={
                            this.state.selectedText === questionOptionTwoText
                          }
                          onChange={e => this.handleOptionChange(e)}
                        />
                      </Col>
                    </Form.Group>
                  </fieldset>
                  <Button>Submit</Button>
                </Form>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
function mapStateToProps({ questions, users }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  return {
    question: question ? formatQuestion(question, users) : null
  };
}
export default connect(mapStateToProps)(QuestionAnswering);
