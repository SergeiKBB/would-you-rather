import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import styles from './question.less';
import Answers from "./answers/anwsersComponent";
import Stats from "./stats";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  render() {
    const { question: { question }, addAnswer, answer } = this.props;
    const { question: item } = this.props;
    const { isOpen } = this.state;
    const finalQuestion = question[question.length - 1] === '?' ? question : question + '?';
    return (
      <div>
        <Form className={styles.form}>
          <h2 className={`${styles.question} ${isOpen ? styles.question_active : ''}`} onClick={this.handleOpen}>{finalQuestion}</h2>
          { answer ? <Stats isOpen={isOpen} stats={answer}/>
            : <Answers isOpen={isOpen} question={item} addAnswer={addAnswer} />}
        </Form>
      </div>
    )
  }
}

export default Question;
