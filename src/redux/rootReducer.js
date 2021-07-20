import LoginReducer from "./reducers/LoginReducer";
import { combineReducers } from "redux";
import TreeDiagramReducer from "./reducers/TreeDiagramReducer";

const rootReducer = combineReducers({
    LoginReducer,
    TreeDiagramReducer
})

export default rootReducer;