import * as a from '../questionsActions';
import reducer from '../questionsReducer';

describe('questions reducer', () => {
  const initialState = {
    list: []
  };

  describe('request questions reducer', () => {
    it('REQUEST_QUESTIONS_BEGIN', () => {
      const action = {
        type: [a.requestQuestionsBegin]
      };
      expect(reducer(initialState, action)).toEqual(initialState);
    });

    it('REQUEST_QUESTIONS_SUCCESS', () => {
      const action = {
        type: [a.requestQuestionsSuccess],
        payload: {}
      };
      expect(reducer(initialState, action)).toEqual({
        ...initialState,
        list: action.payload
      });
    });

    it('REQUEST_QUESTIONS_FAILURE', () => {
      const action = {
        type: [a.requestQuestionsFailure],
        payload: 'Error'
      };
      expect(reducer(initialState, action)).toEqual({
        ...initialState,
        error: action.payload
      });
    });
  });

  describe('request add question', () => {
    it('ADD_QUESTION_BEGIN', () => {
      const action = {
        type: [a.requestAddQuestionBegin]
      };
      expect(reducer(initialState,action)).toEqual(initialState)
    });

    it('ADD_QUESTION_SUCCESS', () => {
      const action = {
        type: [a.requestAddQuestionSuccess]
      };
      expect(reducer(initialState,action)).toEqual(initialState)
    });

    it('ADD_QUESTION_FAILURE', () => {
      const action = {
        type: [a.requestAddQuestionFailure],
        payload: 'Error'
      };
      expect(reducer(initialState,action)).toEqual({
        ...initialState,
        error: action.payload
      })
    });
  })
});
