import React, {Component} from 'react';
import {Route, Redirect, NavLink} from 'react-router-dom';
import { Form, FormGroup, FormControl, FormLabel, FormText } from 'react-bootstrap';
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
    const {gotData} = this.props;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <div className='form-group'>
          <label className={`form-label ${styles.label}`}>Your question</label>
          <textarea className='form-control' onChange={this.handleQuestionChange}/>
        </div>
        <div className='form-group'>
          <label className={`form-label ${styles.label}`}>First answer</label>
          <input className='form-control' onChange={this.handleFirstAnswerChange}/>
        </div>
        <div className='form-group'>
          <label className={`form-label ${styles.label}`}>Second answer</label>
          <input className='form-control' onChange={this.handleSecondAnswerChange}/>
        </div>
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
