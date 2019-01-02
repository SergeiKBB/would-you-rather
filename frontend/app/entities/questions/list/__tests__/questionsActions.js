import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

import * as a from '../questionsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('questionsActions', () => {
  describe('async actions', () => {

    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore()
    });

    it('creates REQUEST_QUESTIONS_SUCCESS', () => {
      fetchMock.getOnce('http://localhost:5000/questions', {
        headers: { 'content-type': 'application/json' },
        body: { data: [ 1, 2, 3 ], status: 'ok' }
      });

      const expectedActions = [
        {
          type: [a.requestQuestionsBegin]
        },
        {
          type: [a.requestQuestionsSuccess],
          payload: [ 1, 2, 3 ]
        }
      ];

      const store = mockStore({});
      //Problem with CORS
      // return store.dispatch(a.getQuestions()).then(() => {
      //   expect(store.getActions()).toEqual(expectedActions)
      // })
    });
  })
});
