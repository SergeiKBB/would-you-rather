import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionsComponent from './QuestionsListComponent';
import { getQuestions } from '../../entities/questions/list/questionsActions';
import Preloader from "../../components/preloader/PreloaderComponent";

class QuestionsListContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getQuestions());
  }

  render() {
    const { questions, isLoading } = this.props;
    if(isLoading) {
      return <Preloader />
    }
    return <QuestionsComponent questions={questions}/>
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions.list,
    isLoading: state.questions.isLoading
  }
};

export default connect(mapStateToProps)(QuestionsListContainer);
