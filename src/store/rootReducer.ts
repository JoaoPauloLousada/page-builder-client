import { combineReducers } from "@reduxjs/toolkit";
import UiReducer from "./ui";
import ComponentsReducer from "./components";
import ConfigReducer from "./config";

const rootReducer = combineReducers({
  ui: UiReducer,
  components: ComponentsReducer,
  config: ConfigReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
