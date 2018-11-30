import React, {Component} from 'react';
import {Route, Redirect, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './addQuestion.less';
import Button from "../../components/button";

const INITIAL_STATE = {
  question: '',
  firstAnswer: '',
  secondAnswer: ''
};

class QuestionsForm extends Component {
  static propTypes = {
    onAddQuestion: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  handleQuestionChange = (e) => {
    const {value} = e.target;
    this.setState({
      question: value
    })
  };

  handleFirstAnswerChange = (e) => {
    const {value} = e.target;
    this.setState({
      firstAnswer: value
    })
  };

  handleSecondAnswerChange = (e) => {
    const {value} = e.target;
    this.setState({
      secondAnswer: value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {question, firstAnswer, secondAnswer} = this.state;
    const {onAddQuestion} = this.props;
    onAddQuestion({question, firstAnswer, secondAnswer});
    this.setState({...INITIAL_STATE});
  };

  render() {
    const {text, gotData} = this.props;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
          <textarea
            value={text}
            placeholder='Your question'
            onChange={this.handleQuestionChange}
            className={styles.question}
          />
        <input
          type='text'
          value={text}
          placeholder='Your first answer'
          onChange={this.handleFirstAnswerChange}
          className={`${styles['answer-first']} ${styles.answer}`}
        />
        <input
          type='text'
          value={text}
          placeholder='Your second answer'
          onChange={this.handleSecondAnswerChange}
          className={`${styles['answer-second']} ${styles.answer}`}
        />
        <div className={styles.wrapper__btn}>
          <NavLink to='/home'><Button text='Cancel'/></NavLink>
          <Route path='/' render={() => (
            gotData ? <Redirect to='/home'/>
              : <Button text='Add' type='submit'/>
          )}/>
        </div>
      </form>
    )
  }
}

export default QuestionsForm;
