import React from 'react';
import ReactHighChart from 'react-highcharts';
import styles from './statsHighChart.less';

const StatsChart = props => {
  const { stats } = props;
  const config = {
    chart: {
      width: 700,
      type: 'column'
    },
    title: {
      text: 'Top Questions'
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    },
    yAxis: {
      title: {
        min: 0,
        text: 'Number of replies'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [{
      name: 'Questions',
      data: stats,
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    }]
  };
  return (
    <ReactHighChart className={styles.chart} config={config}/>
  )
};

export default StatsChart;
