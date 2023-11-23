import { applyMiddleware, legacy_createStore as createStore } from "redux";
import reducer from "../reducers/movieReducer";
import logger from "redux-logger";

export const myStore = createStore(reducer, applyMiddleware(logger));