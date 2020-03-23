import React, { Component } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

class QuestionPollForm extends Component {
  state = {
    selectedOption: "optionOne"
  };

  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { selectedOption } = this.state;

    this.props.handleSaveQuestionAnswer(selectedOption);
  };

  render() {
    const {
      questionOptionOneText,
      questionOptionTwoText
    } = this.props.question;

    return (
      <div className="question-info">
        <h3>Would you Rather?</h3>
        <Form onSubmit={this.handleSubmit}>
          <fieldset>
            <Form.Group as={Row}>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label={questionOptionOneText}
                  value="optionOne"
                  name="questionOptionText"
                  id={questionOptionOneText}
                  checked={this.state.selectedOption === "optionOne"}
                  onChange={e => this.handleOptionChange(e)}
                />
                <Form.Check
                  type="radio"
                  label={questionOptionTwoText}
                  value="optionTwo"
                  name="questionOptionText"
                  id={questionOptionTwoText}
                  checked={this.state.selectedOption === "optionTwo"}
                  onChange={e => this.handleOptionChange(e)}
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Button type="submit" variant="success" block>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default QuestionPollForm;
