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
      id: '0',
      question: 'Would you rather always be 10 minutes late or always be 20 minutes early?',
      firstAnswer: 'be 10 minutes late',
      secondAnswer: 'be 20 minutes early'
    },
    answer: {
      firstAnswer: 2,
      secondAnswer: 2
    },
    addAnswer: jest.fn()
  };

  beforeEach(() => {
    renderComponent(mockProps);
  });

  describe('handleOpen', () => {
    beforeEach(() => {
      instance.handleOpen();
    });

    it('should change isOpen', () => {
      const isOpenChanged = subject.state('isOpen');
      expect(isOpenChanged).toBeTruthy();
    });

    it('should add class in h3', () => {
      expect(subject.find('h3').hasClass('question question_active')).toBe(true);
    });

    it('should have two Answer components', () => {
      expect(subject.find('Answer')).toHaveLength(2);
    });
  });

  describe('calcPercent', () => {
    it('should calculate percent of each one answer', () => {
      const result = instance.calcPercent(mockProps.answer.firstAnswer);
      expect(result).toBe(50);
    });
  });

  describe('handleFirstAnswer', () => {
    it('should add firs answer', () => {
      instance.handleFirstAnswer();
      expect(mockProps.addAnswer).toHaveBeenCalledWith({
        id: mockProps.question.id,
        firstAnswer: 1,
        secondAnswer: 0
      });
    })
  });

  describe('handleSecondAnswer', () => {
    it('should add second answer', () => {
      instance.handleSecondAnswer();
      expect(mockProps.addAnswer).toHaveBeenCalledWith({
        id: mockProps.question.id,
        firstAnswer: 0,
        secondAnswer: 1
      });
    })
  })
});
