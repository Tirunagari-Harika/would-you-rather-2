import { initialState } from "../../initialState";
import * as actionTypes from "../../actionTypes";
import * as utility from "../../../utility";



// categorizing answered and unanswered questions
const categorizeQuestions = (questions,currentUserId) => {
    let answeredArr = [];
    let unansweredArr = [];

    for(let i=0; i<questions.length; i++){
        if(utility.checkUserAnsweredQuestion(questions[i],currentUserId)){
            answeredArr.push(questions[i]);
        }else{
            unansweredArr.push(questions[i]);
        }
    }
    return {
        answeredquestions:answeredArr,
        unansweredquestions:unansweredArr
    }
}

export const categorizeQuestionsOfUserReducer = (state = initialState.questions,action) => {
    switch(action.type){
        case actionTypes.GET_CATEGORIZED_QUESTIONS_OF_USER :
            let arr = utility.getArray(action.payload.questions);
            arr = arr.sort((a,b) => b.timestamp - a.timestamp);
            let newState = categorizeQuestions(arr,action.payload.currentUserId);
           // console.log("CATEGORIZED QUESTIONS STATE ",newState);
            return newState;
        default:
            return state;
    }
}


