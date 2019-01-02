import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Question from "./question/QueastionContainer";


class Questions extends Component {
  static propTypes = {
    questions: PropTypes.arrayOf(
      PropTypes.shape(
        {
          id: PropTypes.number.isRequired,
          question: PropTypes.string.isRequired,
          firstAnswer: PropTypes.string.isRequired,
          secondAnswer: PropTypes.string.isRequired
        }
      )
    )
  };

  render() {
    const {questions} = this.props;
    return (
      <div className='list-group'>
        {
          questions.map((question) => (
            <div className='list-group-item list-group-item-info' key={question.id}>
              <Question question={question}/>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Questions;
