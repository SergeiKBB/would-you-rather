import React, { Component } from 'react';
import Questions from './features/questions';
import Button from './components/button';
import Header from './components/header/headerComponent';
import styles from './app.less';
import QuestionsForm from "./features/questionsForm";



export default class App extends Component {
    render() {
        return (
            <div className={styles.main}>
                <Header title='Would you rather...' />
                <div className={styles.wrapper__btn}>
                    <Button text='Add question'/>
                </div>
                <Questions />
            </div>
        )
    }
}
