import { legacy_createStore as createStore } from "redux";
import rootred from "./Reducers/index";

const store = createStore(
    rootred
);

export default store;