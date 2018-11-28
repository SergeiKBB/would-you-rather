import React from 'react';
import Header from '../components/header/headerComponent';
import Button from '../components/button';
import AddQuestionForm from '../features/addQuestion';
import styles from './addQuestion.less';

const AddQuestion = props => {
  return (
    <div>
      <Header title='Add Question'/>
      <AddQuestionForm />
    </div>
  )
}


export default AddQuestion;
