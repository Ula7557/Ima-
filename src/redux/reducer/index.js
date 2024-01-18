import { combineReducers } from "redux";
import { reducer } from "./reducers";
import HamburgerState from "./modals";
import VideoHolder from './video'
import InputState from './input'

export const rootReducer = combineReducers({
  data: reducer,
  HamburgerState,
  videoState: VideoHolder,
  InputState
});
