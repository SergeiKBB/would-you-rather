import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './addQuestion.less';
import Button from "../../components/button";
import FormItem from './formItem';

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
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <FormItem type='textarea' text='Your question' handle={this.handleQuestionChange} />
        <FormItem text='First answer' handle={this.handleFirstAnswerChange} />
        <FormItem text='Second answer' handle={this.handleSecondAnswerChange} />
        <div className={styles.wrapper__btn}>
          <NavLink to='/'><Button text='Cancel'/></NavLink>
          <Button text='Add' type='submit'/>
        </div>
      </form>
    )
  }
}

export default QuestionsForm;
