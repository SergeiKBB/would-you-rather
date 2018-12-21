import axios from 'axios';
import { createAction } from 'redux-actions';

export const requestAnswersBegin = createAction('REQUEST_ANSWERS_BEGIN');
export const requestAnswersSuccess = createAction('REQUEST_ANSWERS_SUCCESS');
export const requestAnswersFailure = createAction('REQUEST_ANSWERS_FAILURE');

export const getAllAnswersBegin = createAction('GET_ALL_ANSWERS_BEGIN');
export const getAllAnswersSuccess = createAction('GET_ALL_ANSWERS_SUCCESS');
export const getAllAnswersFailure = createAction('GET_ALL_ANSWERS_FAILURE');

export const requestAddAnswerBegin = createAction('ADD_ANSWER_BEGIN');
export const requestAddAnswerSuccess = createAction('ADD_ANSWER_SUCCESS');
export const requestAddAnswerFailure = createAction('ADD_ANSWER_FAILURE');

export const getAnswers = id => {
  return dispatch => {
    dispatch(requestAnswersBegin(id));
    return axios.get(`http://localhost:5000/stats/${id}`)
      .then(res => {
        dispatch(requestAnswersSuccess({data: res.data, id: id}))
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

export const getAllAnswers = () => {
  return dispatch => {
    dispatch(getAllAnswersBegin());
    return axios.get('http://localhost:5000/stats')
      .then(res => {
        dispatch(getAllAnswersSuccess(res.data))
      })
      .catch(error => {
        dispatch(getAllAnswersFailure(error))
      })
  }
};
