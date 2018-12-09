import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionsComponent from './QuestionsListComponent';
import { getQuestions } from '../../entities/questions/questionsActions';

class QuestionsListContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getQuestions());
  }

  render() {
    const { questions } = this.props;
    return <QuestionsComponent questions={questions}/>
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions.list,
  }
};

export default connect(mapStateToProps)(QuestionsListContainer);
