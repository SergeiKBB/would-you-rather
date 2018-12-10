import React from 'react';
import Header from '../components/header/headerComponent';
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
