import React from 'react';
import { Link } from 'react-router-dom';
import StatsChart from './chart';
import Preloader from "../../components/preloader/PreloaderComponent";
import Button from "../../components/button";
import styles from './statsChart.less';

const StatsChartComponent = props => {
  const { isLoading } = props;
  if(isLoading) {
    return <Preloader />
  }
  return (
    <div className={styles.chart_wrapper}>
      <StatsChart {...props}/>
      <Link to='/' className={styles.btn}>
        <Button text='Cancel' />
      </Link>
    </div>
    )
};

export default StatsChartComponent;
