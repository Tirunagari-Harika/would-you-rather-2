import * as actionTypes from "../actionTypes";
import * as api from "../../_DATA";

export const loggedInCurrentUser = (id) => {
    return (dispatch) => {
        return api._getUsers().then((data) => {          
            dispatch({
                type:actionTypes.CURRENT_USER_LOGIN,
                payload:{
                    users:data,
                    id:id
                }
             })
        })
    }
}

export const logoutCurrentUser = () => {
    return { type:actionTypes.CURRENT_USER_LOGOUT }
}

