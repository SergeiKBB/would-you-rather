import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './questions.less';
import Question from "./question/queastionContainer";



class Questions extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }


  render() {
    const { questions } = this.props;
    return (
      <div className='list-group'>
        {
          questions.map((question) => (
            <div className='list-group-item list-group-item-info' key={question.id}>
              <Question question={question} />
            </div>
          ))
        }
      </div>
    )
  }
}

export default Questions;
