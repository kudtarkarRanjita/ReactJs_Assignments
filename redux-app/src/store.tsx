import { legacy_createStore as createStore } from "redux";
import { counterReducer } from "./Pages/Counter/Reducer";

export const store = createStore(counterReducer);
