import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/header/HeaderComponent';
import Button from '../components/button';
import QuestionsListComponent from '../features/questionsList';
import styles from "../app.less";

const QuestionsList = props => {
  return (
    <div>
      <Header title='Would you rather...'>
        <NavLink to='/addQuestion' className={styles.btn}>
          <Button text='Add question' />
        </NavLink></Header>
      <QuestionsListComponent />
    </div>
  )
};


export default QuestionsList;
