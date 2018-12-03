import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
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

  calcPercent = (stats, which) => {
    const {firstAnswer, secondAnswer} = stats;
    const sum = Number(firstAnswer) + Number(secondAnswer);
    if (which) {
      return Math.round(firstAnswer / sum * 100);
    }

    return Math.round(secondAnswer / sum * 100);
  };

  render() {
    const {question: {question, firstAnswer, secondAnswer}, answer: stats} = this.props;
    const {isOpen} = this.state;
    const finalQuestion = question[question.length - 1] === '?' ? question : question + '?';
    return (
      <div>
        <Form className={styles.form}>
          <h3 className={`${styles.question} ${isOpen ? styles.question_active : ''}`} onClick={this.handleOpen}>{finalQuestion}</h3>
          {isOpen ? <React.Fragment>
            <Answer answer={firstAnswer} handleAnswer={this.handleFirstAnswer}/>
            {stats ? <Stats percent={this.calcPercent(stats, true)}/> : null}
            <Answer answer={secondAnswer} handleAnswer={this.handleSecondAnswer}/>
            {stats ? <Stats percent={this.calcPercent(stats)}/> : null}
          </React.Fragment> : null}
        </Form>
      </div>
    )
  }
}

export default Question;
