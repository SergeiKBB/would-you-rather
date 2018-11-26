import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './questions.less';
import Question from "./question/QuestionComponent";



class Questions extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
  }


  render() {
    const { questions } = this.props;
    return (
      questions.map((question) => (
        <Question question={question} key={question.id}/>
      ))
    )
  }
}

export default Questions;
