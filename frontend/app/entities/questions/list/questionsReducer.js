import { requestQuestionsSuccess, requestQuestionsBegin, requestQuestionsFailure, requestAddQuestionSuccess,
         requestAddQuestionFailure, requestAddQuestionBegin } from './questionsActions';
import { handleActions } from 'redux-actions';

const initialState = {
  list: [],
  isLoading: false
};

export default handleActions(
  {
    [requestQuestionsBegin]: state => ({...state,  isLoading: true}),
    [requestQuestionsSuccess]: (state, { payload }) => ({ ...state, list: payload, isLoading: false}),
    [requestQuestionsFailure]: (state, { payload }) => ({ ...state, error: payload}),
    [requestAddQuestionBegin]: state => state,
    [requestAddQuestionSuccess]: state => state,
    [requestAddQuestionFailure]: (state, { payload }) => ({ ...state, error: payload})
  },
  initialState
);


