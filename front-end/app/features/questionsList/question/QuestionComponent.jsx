import React, {Component} from 'react';
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
    const { question: { question }, addAnswer, answers} = this.props;
    const { question: item } = this.props;
    const { isOpen } = this.state;
    const finalQuestion = question[question.length - 1] === '?' ? question : question + '?';
    return (
      <div>
        <form className={styles.form}>
          <h2 className={`${styles.question} ${isOpen ? styles.question_active : ''}`} onClick={this.handleOpen}>{finalQuestion}</h2>
          {answers ? <Stats isOpen={isOpen} />
            : <Answers isOpen={isOpen} question={item} addAnswer={addAnswer} />}
        </form>
      </div>
    )
  }
}

export default Question;
