import { requestQuestionsSuccess, requestQuestionsBegin, requestQuestionsFailure, requestAddQuestionSuccess,
         requestAddQuestionFailure, requestAddQuestionBegin, requestAnswersBegin, requestAnswersSuccess,
         requestAnswersFailure, requestAddAnswerBegin, requestAddAnswerSuccess, requestAddAnswerFailure } from './questionsActions';
import { handleActions } from 'redux-actions';

const initialState = {
  list: [],
  answers: []
};

export default handleActions(
  {
    [requestQuestionsBegin]: state => (state),
    [requestQuestionsSuccess]: (state, { payload }) => ({ ...state, list: payload, gotData: false}),
    [requestQuestionsFailure]: (state, { payload }) => ({ ...state, error: payload}),
    [requestAddQuestionBegin]: state => state,
    [requestAddQuestionSuccess]: state => ({ ...state, gotData: true}),
    [requestAddQuestionFailure]: (state, { payload }) => ({ ...state, error: payload}),
    [requestAnswersBegin]: state => (state),
    [requestAnswersSuccess]: (state, { payload }) => {
      const answers = state.answers ? [...state.answers] : [];
      answers.push(payload);
      return {
        ...state,
        answers: answers
      }
    },
    [requestAnswersFailure]: (state, { payload }) => ({ ...state, error: payload}),
    [requestAddAnswerBegin]: state => (state),
    [requestAddAnswerSuccess]: state => (state),
    [requestAddAnswerFailure]: (state, { payload }) => ({...state, error: payload})
  },
  initialState
);
