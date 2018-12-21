import { createSelector } from 'reselect';

const answersSelector = state => state.stats.answers;
const questionIdSelector = (state, props) => props.question.id;
const loadingSelector = state => state.stats.loading;

export const getQuestionStatsSelector = createSelector(
  answersSelector,
  questionIdSelector,
  (answers, id) => answers.find((item) => Number(item.id) === id) || {}
);

export const getLoadingStatus = createSelector(
  loadingSelector,
  questionIdSelector,
  (loadingStatus, id) => loadingStatus.find((item) => Number(item.id) === id) || {}
);

const questionListSelector = state => state.questions.list.map(item => {
  return {
    id: item.id,
    question: item.question,
  }
});

export const getStats = createSelector(
  questionListSelector,
  answersSelector,
  (list, answers) => list.map(item => {
    const answer = answers.find(element => {
      return element.id === item.id
    });
    if(!answer) {
      return []
    }
    const numberAnswers = answer.firstAnswer + answer.secondAnswer;
    return [item.question, numberAnswers];
  }).sort((sort))
);

function sort(a, b) {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
}
