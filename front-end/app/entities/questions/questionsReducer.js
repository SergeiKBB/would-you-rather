import { requestQuestionsSuccess, requestQuestionsBegin, requestQuestionsFailure, requestAddQuestionSuccess,
         requestAddQuestionFailure, requestAddQuestionBegin, requestAnswersBegin, requestAnswersSuccess,
         requestAnswersFailure, requestAddAnswerBegin, requestAddAnswerSuccess, requestAddAnswerFailure } from './questionsActions';
import { handleActions } from 'redux-actions';

const initialState = {
  list: [],
  gotData: false,
  answers: {},
  id: ''
};

export default handleActions(
  {
    [requestQuestionsBegin]: state => (state),
    [requestQuestionsSuccess]: (state, { payload }) => ({ list: payload}),
    [requestQuestionsFailure]: (state, { payload }) => ({ ...state, error: payload}),
    [requestAddQuestionBegin]: state => state,
    [requestAddQuestionSuccess]: state => ({ ...state, gotData: true}),
    [requestAddQuestionFailure]: (state, { payload }) => ({ ...state, error: payload}),
    [requestAnswersBegin]: state => (state),
    [requestAnswersSuccess]: (state, { payload }) => ({...state, answers: payload}),
    [requestAnswersFailure]: (state, { payload }) => ({ ...state, error: payload}),
    [requestAddAnswerBegin]: state => (state),
    [requestAddAnswerSuccess]: (state, { payload }) => ({...state, id: payload}),
    [requestAddAnswerFailure]: (state, { payload }) => ({...state, error: payload})
  },
  initialState
);
