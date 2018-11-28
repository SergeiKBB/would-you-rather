import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionsComponent from './addQuestionComponent';
import { addQuestion } from '../../entities/questions/questionsActions';


class AddQuestionContainer extends Component {
  render() {
    return <QuestionsComponent onAddQuestion={this.props.onAddQuestion} gotData={this.props.gotData}/>
  }
}

const mapDispatchToProps = dispatch => ({
  onAddQuestion: question => dispatch(addQuestion(question))
});

const mapStateToProps = state => {
  return {
    gotData: state.questions.gotData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestionContainer);
