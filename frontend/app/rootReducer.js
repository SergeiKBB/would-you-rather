import { combineReducers } from 'redux';
import questions from './entities/questions/list/questionsReducer';
import stats from './entities/questions/stats/statsReducer';

export default combineReducers({
  questions,
  stats
});
