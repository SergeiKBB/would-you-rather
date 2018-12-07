import React from 'react';
import {shallow} from 'enzyme';
import QuestionComponent from '../QuestionComponent';

jest.mock('../question.less');

describe('QuestionComponent', () => {
  let subject;
  let instance;

  const renderComponent = (props) => {
    subject = shallow(<QuestionComponent {...props}/>);
    instance = subject.instance();
  };

  const mockProps = {
    question: {
      question: 'Would you rather always be 10 minutes late or always be 20 minutes early?',
      firstAnswer: 'be 10 minutes late',
      secondAnswer: 'be 20 minutes early'
    },
    answer: {
      firstAnswer: 2,
      secondAnswer: 2
    }
  };

  beforeEach(() => {
    renderComponent(mockProps);
  });

  describe('Check rendering component after call handleOpen function', () => {
    it('should change isOpen', () => {
      const isOpenDefault = subject.state('isOpen');
      instance.handleOpen();
      const isOpenChanged = subject.state('isOpen');
      expect(isOpenDefault).toBeFalsy();
      expect(isOpenChanged).toBeTruthy();
    });

    it('should add class in h3', () => {
      expect(subject.find('h3').hasClass('question')).toBe(true);
      instance.handleOpen();
      expect(subject.find('h3').hasClass('question question_active')).toBe(true);
    });

    it('should have two Answer components', () => {
      expect(subject.find('Answer')).toHaveLength(0);
      instance.handleOpen();
      expect(subject.find('Answer')).toHaveLength(2)
    });
  });

  it('should calculate percent of each one answer', () => {
    const result = instance.calcPercent(mockProps.answer.firstAnswer);
    expect(result).toBe(50);
  });
});
