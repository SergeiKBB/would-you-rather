import React, { Component } from 'react';
import QuestionComponent from './QuestionComponent';
import { connect } from 'react-redux';
import { getAnswers, addAnswer } from '../../../entities/questions/stats/statsActions';
import { getQuestionStatsSelector } from '../../../entities/questions/stats/statsSelectors';

class QuestionContainer extends Component {
  addAnswer = (answer) => {
    this.props.onAddAnswer(answer)
      .then(() => this.props.onGetAnswer(answer.id))
  };

  render() {
    const { question, answer } = this.props;
    return (
      <QuestionComponent addAnswer={this.addAnswer} question={question} answer={answer} />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onAddAnswer: answer => (dispatch(addAnswer(answer))),
  onGetAnswer: id => (dispatch(getAnswers(id)))
});

const mapStateToProps = (state, ownProps) => {
  return {
    answer: getQuestionStatsSelector(state, ownProps)
  }};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
