import { combineReducers } from "redux";
import { cardReducer } from "./card.reducer";

export const rootReducer = combineReducers({
    cardReducer,
});