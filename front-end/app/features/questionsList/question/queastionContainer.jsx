import React, { Component } from 'react';
import QuestionComponent from './QuestionComponent';
import { connect } from 'react-redux';
import { getAnswers } from '../../../entities/questions/questionsActions';

class QuestionContainer extends Component {

  componentDidMount() {
    const { dispatch, question: { id } } = this.props;
    dispatch(getAnswers(id));
  }

  render() {
    const { question, answers} = this.props;
    return (
      <QuestionComponent question={question} answers={answers}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    answers: state.questions.answers
  }
}

export default connect(mapStateToProps)(QuestionContainer);
