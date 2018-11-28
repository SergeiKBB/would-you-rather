import React, {Component} from 'react';
import styles from './question.less';
import Answers from "./answers/anwsersComponent";

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
  }

  render() {
    const { question: {question, firstAnswer, secondAnswer}, answers} = this.props;
    const { isOpen } = this.state;
    const finalQuestion = question[question.length - 1] === '?' ? question : question + '?';
    return (
      <div>
        <form className={styles.form}>
          <h2 className={`${styles.question} ${isOpen ? styles.question_active : ''}`} onClick={this.handleOpen}>{finalQuestion}</h2>
          <Answers isOpen={isOpen} firstAnswer={firstAnswer} secondAnswer={secondAnswer} answers={answers}/>
        </form>
      </div>
    )
  }
}

export default Question;
