import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

/* import { getUsersReducer } from "./reducers/users/usersReducer";
import { currentUserReducer } from "./reducers/users/currentUserReducer"; 
import { categorizeQuestionsReducer } from "./reducers/questions/categorizedQuestions"; */

import { reducer } from "./reducers";

/* const rootReducer = combineReducers({
    users: getUsersReducer,
    currentUser : currentUserReducer,
    questions : categorizeQuestionsReducer
});
 */

const rootReducer = combineReducers({
    state: reducer
});

// Middleware logging actions
const logger = (store) => (next) => (action) => {
    const result = next(action);
    console.log("[Middleware] action Result ", store.getState(), result);
    return result;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)));

export default store;


