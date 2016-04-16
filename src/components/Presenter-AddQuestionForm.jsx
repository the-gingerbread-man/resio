import React from 'react';

class AddQuestionForm extends React.Component {

  constructor(props) {
    super(props);
    this.chartNames = ['thumbs-up', 'bar-chart', 'pie-chart'];
    this.state = {
      selectedChartType: null,
    };
  }

  selectType(selection) {
    console.log("AddQuestionForm.selectType called")
    this.setState({ selectedChartType: selection });
  }

  createQuestion() {
    console.log("AddQuestionForm.createQuestion called");
    console.log(this.state.selectedChartType);
    console.log(this.state);
    // Don't create a new question if no type has been selected
    if (this.state.selectedChartType === null) {
      return;
    }

    this.props.addQuestion(this.chartNames[this.state.selectedChartType]);

    this.setState({ selectedChartType: null });
  }

  render() {
    const iconSize = 'fa-5x';

    const graphTypeIcons = this.chartNames.map((chartName, index) => {
      return (<i key={chartName}
        className={`fa fa-${chartName} ${iconSize}`}
        onClick={() => { return this.selectType(index); }}
      />
        );
    });

    return (
        <div className="question_form">
          {graphTypeIcons}
          <button onClick={this.createQuestion}>Add A Question</button>
        </div>
      );
  }
}

export default AddQuestionForm;
