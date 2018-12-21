import {
  requestAnswersBegin, requestAnswersSuccess,
  requestAnswersFailure, requestAddAnswerBegin, requestAddAnswerSuccess, requestAddAnswerFailure,
  getAllAnswersBegin, getAllAnswersSuccess, getAllAnswersFailure
} from './statsActions';
import {handleActions} from 'redux-actions';

const initialState = {
  answers: [],
  loading: []
};

export default handleActions(
  {
    [requestAnswersBegin]: (state, { payload }) => ({...state, loading: transformLoadingArray(state.loading, {id: payload, isLoading: true})}),
    [requestAnswersSuccess]: requestAnswersProcessor,
    [requestAnswersFailure]: (state, {payload}) => ({...state, error: payload}),
    [requestAddAnswerBegin]: state => ({...state, isLoading: true}),
    [requestAddAnswerSuccess]: state => ({...state, isLoading: false}),
    [requestAddAnswerFailure]: (state, {payload}) => ({...state, error: payload}),
    [getAllAnswersBegin]: state => ({...state, isLoading: true}),
    [getAllAnswersSuccess]: (state, { payload }) => ({...state, answers: payload, isLoading: false}),
    [getAllAnswersFailure]: (state, {payload}) => ({...state, error: payload})
  },
  initialState
);

function requestAnswersProcessor(state, {payload: { data, id }}) {
  const answers = [...state.answers];
  const index = answers.findIndex(item => {
    return item.id === data.id;
  });
  if (index === -1) {
    answers.push(data);
  } else {
    answers[index] = data;
  }
  return {
    ...state,
    answers: answers,
    loading: transformLoadingArray(state.loading, {id, isLoading: false})
  }
}

function transformLoadingArray(array, item) {
  let newArray = [...array];
  const index = newArray.findIndex(element => element.id === item.id);
  if(index >= 0) {
    newArray[index] = item;
  } else {
    newArray.push(item);
  }
  return newArray
}
