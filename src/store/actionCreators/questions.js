import * as actionTypes from "../actionTypes";
import * as api from "../../_DATA";

const questions = (action,payload) => {   
    return { type:action,payload: payload }
}

export const getQuestionsOfUser = (currentUserId) => {
    return (dispatch) => {
        return api._getQuestions().then((data) => {
            dispatch(questions(actionTypes.GET_CATEGORIZED_QUESTIONS_OF_USER, {
                questions: data,
                currentUserId: currentUserId
            }));
        })
        .catch((err) => {
            console.log("Error in Questions Action ",err);
        })
    }   
}

export const getParticularQuestion = (questionId) => {
    return (dispatch) => {
        return api._getQuestions().then((data) => {
            dispatch(questions(actionTypes.GET_PARTICULAR_QUESTION,{
                questions:data,
                questionId:questionId
            }));
        })
        .catch((err) => {
            console.log("Error in getting particular question ",err);
        })
    }
}

export const saveQuestion = (newQuestion) => {
    return (dispatch) => {
        return api._saveQuestion(newQuestion).then((data) => {
            dispatch({
                type:actionTypes.SAVE_QUESTION,
                newQuestion:data
            })
        })
        .catch((err) => {
            console.log("Error in saving the question ",err);
        })
    }
}
