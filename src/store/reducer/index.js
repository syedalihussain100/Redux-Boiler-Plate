import { combineReducers } from "redux";

import firstreducer from "./firstreducer";

const rootreducer = combineReducers({
  firstreducer: firstreducer,
});

export default rootreducer;
