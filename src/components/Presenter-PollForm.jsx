import React from 'react';
import AddQuestionForm from './Presenter-AddQuestionForm.jsx';
import BarGraphForm from './Presenter-BarGraphForm.jsx';

class PollForm extends React.component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  addQuestion(type) {
    // TO DO: Add functionality that changes the type of question by the
    // type parameter
    const emptyChart = {
      chartType: '',
      data: {
        label: 'New Question',
        values: [],
      },
    };
    const updatedQuestions = this.state.questions;
    updatedQuestions.push(emptyChart);
    this.setState({ questions: updatedQuestions });
  }

  addChoice(questionIndex) {
    const emptyChoice = {
      x: 'New Choice',
      y: 0,
    };
    const updatedQuestions = this.state.questions;
    updatedQuestions[questionIndex].data.values.push(emptyChoice);
    this.setState({ questions: updatedQuestions });
  }

  removeQuestion() {

  }

  removeChoice() {

  }

  render() {
    const questions = this.state.questions.map((question, index) => {
      // Change this to render different types of charts based on type selection
      // return <Question key={index} data={question} removeQuestion={this.removeQuestion}  />
    });

    return (
      <div className="poll_form">
        {questions}
        <AddQuestionForm addQuestion={this.addQuestion} />
      </div>
      );
  }
}

export default PollForm;
