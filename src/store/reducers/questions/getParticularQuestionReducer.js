import * as actionTypes from "../../actionTypes";
import { initialState } from "../../initialState";
/* import * as utility from "../../../utility"; */

const getParticularQuestion = ({questions,questionId}) => {
    return questions[questionId];
}

export const getParticularQuestionReducer = (state = initialState.particularQuestion, action) => {
    switch(action.type){
        case actionTypes.GET_PARTICULAR_QUESTION :
            return getParticularQuestion(action.payload);        
        default:
            return state;
    }

}