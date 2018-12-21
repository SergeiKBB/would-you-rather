import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import QuestionsList from './scenes/QuestionsList';
import AddQuestion from './scenes/AddQuestion';
import StatsChart from './scenes/StatsChart';
import styles from './app.less';



export default class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className={styles.main}>
                    <Route exact path='/' component={QuestionsList} />
                    <Route path='/home' component={QuestionsList} />
                    <Route path='/addQuestion' component={AddQuestion} />
                    <Route path='/statsChart' component={StatsChart} />
                </div>
            </Router>
        )
    }
}
