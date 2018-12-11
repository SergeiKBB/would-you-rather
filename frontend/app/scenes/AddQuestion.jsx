import React from 'react';
import Header from '../components/header/HeaderComponent';
import AddQuestionForm from '../features/addQuestion';

const AddQuestion = props => {
  return (
    <div>
      <Header title='Add Question'/>
      <AddQuestionForm />
    </div>
  )
};


export default AddQuestion;
