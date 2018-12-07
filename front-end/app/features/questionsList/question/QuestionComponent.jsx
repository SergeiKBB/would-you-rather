import React, {Component} from 'react';
import styles from './question.less';
import Answer from "./answers/anwsersComponent";
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

  handleFirstAnswer = () => {
    const {addAnswer, question: {id}} = this.props;
    addAnswer({
      id,
      firstAnswer: 1,
      secondAnswer: 0
    })
  };

  handleSecondAnswer = () => {
    const {addAnswer, question: {id}} = this.props;
    addAnswer({
      id,
      firstAnswer: 0,
      secondAnswer: 1
    })
  };

  calcPercent = (value) => {
    const { firstAnswer, secondAnswer} = this.props.answer;
    const sum = Number(firstAnswer) + Number(secondAnswer);

    return Math.round(value / sum * 100);
  };

  render() {
    const {question: {question, firstAnswer, secondAnswer}, answer: { firstAnswer: firstValue, secondAnswer: secondValue}} = this.props;
    const {isOpen} = this.state;
    const finalQuestion = question[question.length - 1] === '?' ? question : question + '?';
    return (
      <div>
        <form className={styles.form}>
          <h3 className={`${styles.question} ${isOpen ? styles.question_active : ''}`} onClick={this.handleOpen}>{finalQuestion}</h3>
          {isOpen && <React.Fragment>
            <Answer answer={firstAnswer} handleAnswer={this.handleFirstAnswer} percent={this.calcPercent(firstValue)}/>
            <Answer answer={secondAnswer} handleAnswer={this.handleSecondAnswer} percent={this.calcPercent(secondValue)}/>
          </React.Fragment>}
        </form>
      </div>
    )
  }
}

export default Question;
