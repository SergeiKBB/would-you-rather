import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import QuestionsList from './scenes/QuestionsList';
import AddQuestion from './scenes/AddQuestion';
import styles from './app.less';



export default class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className={styles.main}>
                    <Route exact path='/' component={QuestionsList} />
                    <Route path='/home' component={QuestionsList} />
                    <Route path='/addQuestion' component={AddQuestion} />
                </div>
            </Router>
        )
    }
}
