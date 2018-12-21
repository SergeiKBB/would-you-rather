import React from 'react';
import Header from "../components/header/HeaderComponent";
import StatsChartComponent from '../features/statsChart';
import styles from "../app.less";
import Button from "../components/button";
import {Link} from "react-router-dom";

const Stats = props => {
  return (
    <>
      <Header title='Stats chart' />
      <StatsChartComponent />
    </>
  )
};

export default Stats;
