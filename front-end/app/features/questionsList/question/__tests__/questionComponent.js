import React from 'react';
import { shallow } from 'enzyme';
import QuestionComponent from '../QuestionComponent';

describe('QuestionComponent', () => {
  let subject;
  let instance;

  const renderComponent = (props) =>{
    subject = shallow(<QuestionComponent {...props}/>);
    instance = subject.instance();
  };

  const mockProps = {
    question: {
      question: []
    },
    answer: {}
  };

  beforeEach(() => {
    renderComponent(mockProps);
  });

  it('render QuestionComponent', () => {
    console.log(subject.debug());
  })
});

