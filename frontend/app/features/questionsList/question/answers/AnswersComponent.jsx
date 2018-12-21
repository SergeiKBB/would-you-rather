import Answer from './answer';
import PropsTypes from 'prop-types';
import React from "react";

const AnswersComponent = props => {
  const { question: { firstAnswer, secondAnswer },
          answer: { firstAnswer: firstValue, secondAnswer: secondValue},
          handleAnswer: { handleFirstAnswer, handleSecondAnswer },
          calcPercent, checked, positionAnswer } = props;
  return (
    <React.Fragment>
      <Answer answer={firstAnswer} checked={checked} positionAnswer={positionAnswer === 0} handleAnswer={handleFirstAnswer} percent={calcPercent(firstValue)}/>
      <Answer answer={secondAnswer} checked={checked} positionAnswer={positionAnswer === 1} handleAnswer={handleSecondAnswer} percent={calcPercent(secondValue)}/>
    </React.Fragment>
  )
};

AnswersComponent.propTypes = {
  question: PropsTypes.object.isRequired,
  handleAnswer: PropsTypes.object.isRequired,
  calcPercent: PropsTypes.func.isRequired,
  checked: PropsTypes.bool,
  positionAnswer: PropsTypes.number
};

export default AnswersComponent;
