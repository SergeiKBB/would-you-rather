import { getQuestionStatsSelector } from '../statsSelectors';

describe('statsSelectors', () => {
  const mockAnswers = [
    {
      id: 1,
      firstAnswer: 0,
      secondAnswer: 2
    },
    {
      id: 2,
      firstAnswer: 1,
      secondAnswer: 1
    }
  ];
  it('getQuestionStatsSelector', () => {
    expect(getQuestionStatsSelector.resultFunc(mockAnswers, 2)).toEqual({id: 2, firstAnswer: 1, secondAnswer: 1});
  })
});
