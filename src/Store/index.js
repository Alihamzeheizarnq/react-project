import { createStore } from "redux";
import reducer, { addToCard, removeToCard } from "./reducer";
let store = createStore(reducer);

export { store as default, addToCard, removeToCard };
