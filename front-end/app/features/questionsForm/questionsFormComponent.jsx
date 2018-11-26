import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './questionsForm.less';

const INITIAL_STATE = {
    question: '',
    firstAnswer: '',
    secondAnswer: ''
}

class QuestionsForm extends Component {
    static propTypes = {
        onAddQuestion: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    handleQuestionChange = (e) => {
        const { value } = e.target;
        this.setState({
            question: value
        })
    }

    handleFirstAnswerChange = (e) => {
        const { value } = e.target;
        this.setState({
            firstAnswer: value
        })
    }

    handleSecondAnswerChange = (e) => {
        const { value } = e.target;
        this.setState({
            secondAnswer: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { question, firstAnswer, secondAnswer } = this.state;
        const { onAddQuestion } = this.props;
        console.log(onAddQuestion);
        onAddQuestion({question, firstAnswer, secondAnswer});
        this.setState({...INITIAL_STATE});
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.props.text}
            placeholder='Your question'
            onChange={this.handleQuestionChange}
          />
          <input
            type='text'
            value={this.props.text}
            placeholder='Your first answer'
            onChange={this.handleFirstAnswerChange}
          />
          <input
            type='text'
            value={this.props.text}
            placeholder='Your second answer'
            onChange={this.handleSecondAnswerChange}
          />
          <button type="submit">Add</button>
        </form>
        )
    }
}


export default QuestionsForm;
