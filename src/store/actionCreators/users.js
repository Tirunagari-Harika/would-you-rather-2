import * as actionTypes from "../actionTypes";
import * as api from "../../_DATA";


export const getUsers = () => {
    return (dispatch) => {
        return api._getUsers().then((data) => {
           // console.log("Data got ", data);
            dispatch({type:actionTypes.GET_USERS, payload:data})
        })
    }
}



