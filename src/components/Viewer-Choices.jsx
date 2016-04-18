import React from 'react';
import Choice from './Viewer-Choice.jsx';

//The Choice component maps over each question choice and determines the question type (qType).
//If the question type is thumbs, then it'll render the thumbs icon (next component down).
//If the question type is multiple (else below), then we will map over each choice and create the last component - 'Choice.'
class Choices extends React.Component {
  render() {
    let choicesArray = [];
    if (this.props.qType === 'thumbs') {
      choicesArray.push(<Choice key={0} qType={this.props.qType} qIdentifier={this.props.qIdentifier} qChoice={this.props.qChoice} />);
    }
    else {
      let i = 0;
      for (var choiceText in this.props.qChoice){
            choicesArray.push(<Choice key={i} qType={this.props.qType} qIdentifier={this.props.qIdentifier} cIdentifier={i} qChoice={choiceText} />);
            i++;
      }
    }

    return (
            <div>
              {choicesArray}
            </div>
    );
  }
}

export default Choices;
