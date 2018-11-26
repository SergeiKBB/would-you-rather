export const REQUEST_QUESTIONS_BEGIN = 'REQUEST_QUESTIONS_BEGIN';
export const REQUEST_QUESTIONS_SUCCESS = 'REQUEST_QUESTIONS_SUCCESS';
export const REQUEST_QUESTIONS_FAILUR = 'REQUEST_QUESTIONS_FAILURE';


export const requestQuestionsBegin = () => {
  return {
    type: REQUEST_QUESTIONS_BEGIN
};

export const requestQuestionsSuccess = (questions) => {
  return
}

export const getQuestions = question => {
  return (dispatch) => {
    dispatch(requestGet(question));

    return axios.get('http://localhost:4000/questions')
      .then(res => {

      });
  }
};
