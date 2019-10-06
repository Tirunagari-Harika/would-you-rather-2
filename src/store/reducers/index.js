import { initialState } from "../initialState";
import * as actionTypes from "../actionTypes";

import { categorizeQuestionsOfUserReducer } from "./questions/categorizedQuestionsOfUser";
import { currentUserReducer } from "./users/currentUserReducer";
import { getUsersReducer } from "./users/usersReducer";
import { getParticularQuestionReducer } from "./questions/getParticularQuestionReducer";
import { saveQuestionReducer } from "./questions/saveQuestionReducer";
 
export const reducer = (state = initialState, action) => {
    let newState = {};
    switch(action.type){       
        case actionTypes.GET_CATEGORIZED_QUESTIONS_OF_USER:
            newState = { ...state, questions: categorizeQuestionsOfUserReducer(state.questions, action) };
           // console.log("NEW STATE REDUCEER ",newState);
            break;
        
        case actionTypes.GET_PARTICULAR_QUESTION:
            newState = { ...state, particularQuestion: getParticularQuestionReducer(state.questions, action)  };
            //console.log("Particular Question ", newState);
            break;
        
        case actionTypes.SAVE_QUESTION:
            return { ...state, 
                questions:{
                    answeredQuestions: state.questions.answeredQuestions,
                    unansweredQuestions: saveQuestionReducer(state.questions.unansweredQuestions,action)
                }
            }

        case actionTypes.GET_USERS:
            newState = { ...state, users: getUsersReducer(state.users,action) };
            break;

        case actionTypes.CURRENT_USER_LOGIN:
        case actionTypes.CURRENT_USER_LOGOUT:
            newState = { ...state, currentUser: currentUserReducer(state.currentUser, action) };
            break; 
            
        
        default:
            return state;       
    }
    return newState;
}