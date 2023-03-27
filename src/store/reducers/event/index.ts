import { EventState, EventActionEnum, EventAction } from "./types";

const initialState: EventState = {
  guests: [],
  events: [],
  isLoading: false,
  error: "",
};

export default function eventReducer(
  state = initialState,
  action: EventAction
): EventState {
  switch (action.type) {
    case EventActionEnum.SET_GUESTS:
      return {
        ...state,
        guests: action.payload,
      };
    case EventActionEnum.SET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case EventActionEnum.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case EventActionEnum.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
