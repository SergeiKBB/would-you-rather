import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/HeaderComponent';
import Button from '../components/button';
import QuestionsListComponent from '../features/questionsList';
import styles from "../app.less";

const QuestionsList = props => {
  return (
    <div>
      <Header title='Would you rather...'>
        <Link to='/statsChart' className={styles.btn}>
          <Button text='Show stats' />
        </Link>
        <Link to='/addQuestion' className={styles.btn}>
          <Button text='Add question' />
        </Link>
      </Header>
      <QuestionsListComponent />
    </div>
  )
};


export default QuestionsList;
