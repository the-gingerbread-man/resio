import React from 'react';
import AddQuestionForm from './Presenter-AddQuestionForm.jsx';
import BarChartForm from './Presenter-BarChartForm.jsx';

class PollForm extends React.Component {

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
    console.log('added question', this.state);
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
    const questions = this.state.questions.map((data, index) => {
      switch(data.chartType) {
        case 'bar-chart':
          return <BarChartForm key={index} data={data} removeQuestion={this.removeQuestion} />
        case 'pie-chart':
          return <PieChartForm key={index} data={data} removeQuestion={this.removeQuestion} />
        case 'thumbs-up':
          return <ThumbsUpForm key={index} data={data} removeQuestion={this.removeQuestion} />
        }
    });

    return (
      <div className="poll_form">
        {questions}
        <AddQuestionForm addQuestion={this.addQuestion.bind(this)} />
      </div>
      );
  }
}

export default PollForm;
