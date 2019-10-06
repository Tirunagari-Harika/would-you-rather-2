import * as actionTypes from "../../actionTypes";
import { initialState } from "../../initialState";
/* import * as utility from "../../../utility"; */


export const getUsersReducer = (state = initialState.users,action) => {
    if(action.type === actionTypes.GET_USERS){
       // console.log("getUsers Reducer ",action);
      //  const allUsers = usersArr(action.payload);
       // console.log("all Users ",allUsers);
       // return utility.getArray(action.payload);
       return action.payload;
    }

    return state;
}



