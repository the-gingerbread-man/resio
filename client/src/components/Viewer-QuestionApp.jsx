import React from 'react';
import Questions from './Viewer-Questions.jsx';

//This is the top level component for the viewer and holds state for all of the questions pulled from the server api.
//Structure for Viewer components:
// - > QuestionApp > Questions > QuestionContainer > Choices > Choice

class QuestionApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  //Grabs questions and answer choices from server via an Ajax request and then sets the state.
  componentWillMount(){
      $.ajax('/api/questions').done( data => {
        this.setState(data);
      });
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
