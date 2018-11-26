import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionsComponent from './questionsFormComponent';
import { addQuestion } from '../../entities/questions/questionsActions';

class QuestionsFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onAddQuestion: this.props.onAddQuestion
    }
  }

  render() {
    return <QuestionsComponent onAddQuestion={this.state.onAddQuestion}/>
  }
}

const mapDispatchToProps = dispatch => ({
  onAddQuestion: question => dispatch(addQuestion(question))
});

export default connect(null, mapDispatchToProps)(QuestionsFormContainer);
