import React, { Component } from 'react';
import QuestionComponent from './QuestionComponent';
import { connect } from 'react-redux';
import { getAnswers, addAnswer } from '../../../entities/questions/questionsActions';

class QuestionContainer extends Component {

  addAnswer = (answer) => {
    this.props.onAddAnswer(answer)
      .then(() => this.props.onGetAnswer(answer.id))
  };

  render() {
    const { question, answers } = this.props;
    return (
      <QuestionComponent addAnswer={this.addAnswer} question={question} answers={answers}/>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onAddAnswer: answer => (dispatch(addAnswer(answer))),
  onGetAnswer: id => (dispatch(getAnswers(id)))
});

const mapStateToProps = state => ({
  answers: state.questions.answers
});


export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
