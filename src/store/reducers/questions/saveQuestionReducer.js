import { initialState } from "../../initialState";
import * as actionTypes from "../../actionTypes";

export const saveQuestionReducer = (state = initialState.questions.unansweredQuestions, action) => {
    switch(action.type){
        case actionTypes.SAVE_QUESTION:            
            return [...state, action.newQuestion];
        default:
            return state;
    }
}