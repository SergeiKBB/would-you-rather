import { requestAnswersBegin, requestAnswersSuccess,
  requestAnswersFailure, requestAddAnswerBegin, requestAddAnswerSuccess, requestAddAnswerFailure } from './statsActions';
import { handleActions } from 'redux-actions';

const initialState = {
  answers: []
};

export default handleActions(
  {
    [requestAnswersBegin]: state => (state),
    [requestAnswersSuccess]: requestAnswersProcessor,
    [requestAnswersFailure]: (state, { payload }) => ({ ...state, error: payload}),
    [requestAddAnswerBegin]: state => (state),
    [requestAddAnswerSuccess]: state => (state),
    [requestAddAnswerFailure]: (state, { payload }) => ({...state, error: payload})
  },
  initialState
);

function requestAnswersProcessor (state, { payload }) {
  const answers = [...state.answers];
  const index = answers.findIndex(item => {
    return item.id === payload.id;
  });
  if(index === -1) {
    answers.push(payload);
  } else {
    answers[index] = payload;
  }

  return {
    ...state,
    answers: answers
  }
}
