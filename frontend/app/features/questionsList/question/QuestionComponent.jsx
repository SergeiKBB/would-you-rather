import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styles from './question.less';
import Answers from "./answers";
import {getAnswers} from "../../../entities/questions/stats/statsActions";

class Question extends PureComponent {
  static propTypes = {
    addAnswer: PropTypes.func.isRequired,
    answer: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleOpen = () => {
    const { dispatch, question: { id } } = this.props;
    dispatch( getAnswers(id));
    this.setState({
       isOpen: !this.state.isOpen
    })
  };

  handleFirstAnswer = () => {
    const {addAnswer, question: {id}} = this.props;
    localStorage.setItem(id, JSON.stringify({checked: true, answer: 0}));
    addAnswer({
      id,
      firstAnswer: 1,
      secondAnswer: 0
    })
  };

  handleSecondAnswer = () => {
    const {addAnswer, question: {id}} = this.props;
    localStorage.setItem(id, JSON.stringify({checked: true, answer: 1}));
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

  handleAnswer = () => ( {
    handleFirstAnswer: this.handleFirstAnswer,
    handleSecondAnswer: this.handleSecondAnswer
  });

  render() {
    const {question, answer, isLoading: { isLoading }} = this.props;
    const { question: questionStr } = question;
    const {isOpen} = this.state;
    const { checked, answer: positionAnswer } = JSON.parse(localStorage.getItem(question.id)) || {};
    const finalQuestion = questionStr[questionStr.length - 1] === '?' ? questionStr : questionStr + '?';
    return (
      <div>
        <form className={styles.form}>
          <h3 className={`${styles.question} ${isOpen ? styles.question_active : ''}`} onClick={this.handleOpen}>{finalQuestion}</h3>
          {isOpen && !isLoading &&<Answers question={question} answer={answer} checked={checked} positionAnswer={positionAnswer} handleAnswer={this.handleAnswer()} calcPercent={this.calcPercent}/>}
        </form>
      </div>
    )
  }
}

export default Question;
