import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/header/headerComponent';
import Button from '../components/button';
import QuestionsListComponent from '../features/questionsList';
import styles from "../app.less";

const QuestionsList = props => {
  return (
    <div>
      <Header title='Would you rather...' />
      <div className={styles.wrapper__btn}>
        <NavLink to='/addQuestion'>
          <Button text='Add question'/>
        </NavLink>
      </div>
      <QuestionsListComponent />
    </div>
  )
}


export default QuestionsList;
