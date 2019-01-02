import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStats } from '../../entities/questions/stats/statsSelectors';
import { getAllAnswers } from '../../entities/questions/stats/statsActions';
import StatsChartComponent from './StatsChartComponent';
import {getQuestions} from "../../entities/questions/list/questionsActions";

class StatsChartContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch( getAllAnswers());
    dispatch( getQuestions());
  }

  render() {
    const { stats, isLoading} = this.props;
    return <StatsChartComponent stats={stats} isLoading={isLoading}/>
  }
}

const mapStateToProps = state => {
  return {
    stats: getStats(state),
    isLoading: state.stats.isLoading
  }
};

export default connect(mapStateToProps)(StatsChartContainer);
