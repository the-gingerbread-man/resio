import React from 'react';
import Questions from './Viewer-Questions.jsx';

class QuestionApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  componentWillMount(){
      $.ajax('/api/questions').done( data => {
        this.setState(data);
      });
    }

  updateQuestion() {

  }


  render() {
    return (
      <div id="">
        <Questions questionState={this.state.questions} />
      </div>
    );
  }
}

export default QuestionApp;
