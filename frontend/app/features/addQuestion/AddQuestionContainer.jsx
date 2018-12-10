import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionsComponent from './AddQuestionComponent';
import { addQuestion } from '../../entities/questions/list/questionsActions';


class AddQuestionContainer extends Component {
  render() {
    return <QuestionsComponent onAddQuestion={this.props.onAddQuestion}/>
  }
}

const mapDispatchToProps = dispatch => ({
  onAddQuestion: question => dispatch(addQuestion(question))
});

export default connect(null, mapDispatchToProps)(AddQuestionContainer);
