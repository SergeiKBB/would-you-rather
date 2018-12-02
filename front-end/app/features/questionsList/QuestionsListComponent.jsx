import React, {Component} from 'react';
import { ListGroup } from 'react-bootstrap';
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
      <ListGroup>
        {
          questions.map((question) => (
            <ListGroup.Item variant='info'>
              <Question question={question} key={question.id} />
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    )
  }
}

export default Questions;
