import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import QuestionsComponent from './QuestionsComponent'

class QuestionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
    this.count = 0;
  }

  componentDidMount() {
    axios.get('http://localhost:4000/questions')
      .then(res => {
        this.setState({
          questions: res.data
        })
      });
  }

  render() {
    this.count += 1;
    const { questions } = this.state;
    return <QuestionsComponent questions={questions}/>
  }
}

export default QuestionsContainer;
