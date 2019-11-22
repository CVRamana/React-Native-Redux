import { createStore,applyMiddleware,compose } from "redux";
import { reducer } from "../Reducer/index";
import thunk from "redux-thunk";
import logger from "redux-logger";

const enhancer = compose(applyMiddleware(thunk, logger));
const store=createStore(reducer,enhancer)
export default store