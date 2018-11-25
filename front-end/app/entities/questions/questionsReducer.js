import { ADD_QUESTION } from './questionsActions';

const initialState = [];

export default function questions(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_QUESTION:
            return {
            ...state,
            question: payload
            };
        default:
            return state;
    }
}