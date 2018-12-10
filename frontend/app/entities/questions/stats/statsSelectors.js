import { createSelector } from 'reselect';

const answersSelector = state => state.stats.answers;
const questionIdSelector = (state, props) => props.question.id;

export const getQuestionStatsSelector = createSelector(
  answersSelector,
  questionIdSelector,
  (answers, id) => answers.find((item) => Number(item.id) === id) || {}
);
