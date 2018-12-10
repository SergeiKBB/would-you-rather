import { requestQuestionsSuccess, requestQuestionsBegin, requestQuestionsFailure, requestAddQuestionSuccess,
         requestAddQuestionFailure, requestAddQuestionBegin } from './questionsActions';
import { handleActions } from 'redux-actions';

const initialState = {
  list: []
};

export default handleActions(
  {
    [requestQuestionsBegin]: state => (state),
    [requestQuestionsSuccess]: (state, { payload }) => ({ ...state, list: payload}),
    [requestQuestionsFailure]: (state, { payload }) => ({ ...state, error: payload}),
    [requestAddQuestionBegin]: state => state,
    [requestAddQuestionSuccess]: state => state,
    [requestAddQuestionFailure]: (state, { payload }) => ({ ...state, error: payload})
  },
  initialState
);


