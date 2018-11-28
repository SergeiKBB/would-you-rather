import { requestQuestionsSuccess, requestQuestionsBegin, requestQuestionsFailure, requestAddQuestionSuccess,
         requestAddQuestionFailure, requestAddQuestionBegin, requestAnswersBegin, requestAnswersSuccess,
         requestAnswersFailure } from './questionsActions';
import { handleActions } from 'redux-actions';

const initialState = {
  list: [],
  gotData: false,
  answers: {}
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
    [requestAnswersSuccess]: (state, { payload }) => ({ ...state, answers: payload}),
    [requestAnswersFailure]: (state, { payload }) => ({ ...state, error: payload})
  },
  initialState
);
