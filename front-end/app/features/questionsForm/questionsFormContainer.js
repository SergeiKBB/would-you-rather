import { connect } from 'react-redux';
import QuestionsComponent from './questionsFormComponent';
import { addQuestion } from '../../entities/questions/questionsActions';

const mapDispatchToProps = dispatch => ({
    onAddQuestion: question => dispatch(addQuestion(question))
});

export default connect(null, mapDispatchToProps)(QuestionsComponent);