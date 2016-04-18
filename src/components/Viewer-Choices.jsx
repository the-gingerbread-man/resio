import React from 'react';
import Choice from './Viewer-Choice.jsx';

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
