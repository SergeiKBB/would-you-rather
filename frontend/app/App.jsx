import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import QuestionsList from './scenes/questionsList';
import AddQuestion from './scenes/addQuestion';
import styles from './app.less';



export default class App extends Component {
    render() {
        return (
            <Router>
                <div className={styles.main}>
                    <Route exact path='/' component={QuestionsList} />
                    <Route path='/home' component={QuestionsList} />
                    <Route path='/addQuestion' component={AddQuestion} />
                </div>
            </Router>
        )
    }
}
