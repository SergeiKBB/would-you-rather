import axios from 'axios';
import { createAction } from 'redux-actions';
import history from '../../../history';

export const requestQuestionsBegin = createAction('REQUEST_QUESTIONS_BEGIN',updates => updates, () => ({ load: true }));
export const requestQuestionsSuccess = createAction('REQUEST_QUESTIONS_SUCCESS');
export const requestQuestionsFailure = createAction('REQUEST_QUESTIONS_FAILURE');

export const requestAddQuestionBegin = createAction('ADD_QUESTION_BEGIN');
export const requestAddQuestionSuccess = createAction('ADD_QUESTION_SUCCESS');
export const requestAddQuestionFailure = createAction('ADD_QUESTION_FAILURE');

export const getQuestions = () => {
  return (dispatch) => {
    dispatch(requestQuestionsBegin());
    return axios.get('http://localhost:5000/questions')
      .then(res => {
        dispatch(requestQuestionsSuccess(res.data))
      })
      .catch(error => {
        dispatch(requestQuestionsFailure(error))
      });
  }
};

export const addQuestion = question => {
  return dispatch => {
    dispatch(requestAddQuestionFailure());
    return axios.post('http://localhost:5000/questions', question)
      .then(res => {
        dispatch(requestAddQuestionSuccess(res.data));
        history.push('/');
      })
      .catch(error => {
        dispatch(requestAddQuestionFailure(error));
      })
  }
};


