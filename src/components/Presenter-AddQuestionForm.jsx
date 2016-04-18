import React from 'react';

class AddQuestionForm extends React.Component {

  constructor(props) {
    super(props);
    this.chartNames = ['thumbs-up', 'bar-chart', 'pie-chart'];
    this.state = {
      // selectedChartType: null,
      selectedChartType: 'bar-chart',
    };
  }

  selectType(selection) {
    console.log("AddQuestionForm.selectType called")
    this.setState({ selectedChartType: selection });
  }

  createQuestion() {
    // Don't create a new question if no type has been selected
    if (this.state.selectedChartType === null) {
      return;
    }
    console.log(this.chartNames[this.state.selectedChartType]);
    // this.props.addQuestion(this.chartNames[this.state.selectedChartType]);
    this.props.addQuestion('bar-chart');
    
    // this.setState({ selectedChartType: null });
  }

  render() {
    const self = this;
    const iconSize = 'fa-5x';

    const graphTypeIcons = this.chartNames.map((chartName, index) => {
      return (<i key={chartName}
        className={`fa fa-${chartName} ${iconSize}`}
        onClick={() => { return self.selectType(index).bind(self); }}
      />
        );
    });

    return (
        <div className="question_form">
          {graphTypeIcons}
          <button onClick={self.createQuestion.bind(self)}>Add A Question</button>
        </div>
      );
  }
}

export default AddQuestionForm;
