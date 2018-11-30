import axios from 'axios';
import { createAction } from 'redux-actions';

export const requestQuestionsBegin = createAction('REQUEST_QUESTIONS_BEGIN',updates => updates, () => ({ load: true }));
export const requestQuestionsSuccess = createAction('REQUEST_QUESTIONS_SUCCESS');
export const requestQuestionsFailure = createAction('REQUEST_QUESTIONS_FAILURE');

export const requestAddQuestionBegin = createAction('ADD_QUESTION_BEGIN');
export const requestAddQuestionSuccess = createAction('ADD_QUESTION_SUCCESS');
export const requestAddQuestionFailure = createAction('ADD_QUESTION_FAILURE');

export const requestAnswersBegin = createAction('REQUEST_ANSWERS_BEGIN');
export const requestAnswersSuccess = createAction('REQUEST_ANSWERS_SUCCESS');
export const requestAnswersFailure = createAction('REQUEST_ANSWERS_FAILURE');

export const requestAddAnswerBegin = createAction('ADD_ANSWER_BEGIN');
export const requestAddAnswerSuccess = createAction('ADD_ANSWER_SUCCESS');
export const requestAddAnswerFailure = createAction('ADD_ANSWER_FAILURE');

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
      })
      .catch(error => {
        dispatch(requestAddQuestionFailure(error));
      })
  }
};

export const getAnswers = id => {
  return dispatch => {
    dispatch(requestAnswersBegin());
    return axios.get(`http://localhost:5000/stats/${id}`)
      .then(res => {
        dispatch(requestAnswersSuccess(res.data))
      })
      .catch(error => {
        dispatch(requestAnswersFailure(error))
      })
  }
};

export const addAnswer = answer => {
  return dispatch => {
    dispatch(requestAddAnswerBegin());
    return axios.put(`http://localhost:5000/stats/${answer.id}`, answer)
      .then(res => {
        dispatch(requestAddAnswerSuccess())
      })
      .catch(error => {
        dispatch(requestAddAnswerFailure(error))
      })
  }
};
