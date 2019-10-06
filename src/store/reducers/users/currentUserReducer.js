import * as actionTypes from "../../actionTypes";
import { initialState } from "../../initialState";
/* import * as utility from "../../../utility";
 */

const getCurrentUser = ({users,id}) => {
    return users[id]
}

export const currentUserReducer = (state = initialState.currentUser, action) => {
    switch(action.type){
        case actionTypes.CURRENT_USER_LOGIN :
           // return utility.getItemInObj(...action.payload);
           return getCurrentUser(action.payload);
        case actionTypes.CURRENT_USER_LOGOUT :
            return {};
        default:
            return state;
    }

}
