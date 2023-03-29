import {
  EventActionEnum,
  SetGuestsAction,
  SetEventsAction,
  SetIsLoadingAction,
  SetErrorAction,
} from "./types";
import { IEvent } from "models/IEvent";
import { AppDispatch } from "store/index";
import { IUser } from "models/IUser";
import UserService from "api/UserService";

export const EventActionCreators = {
  setGuests: (guests: IUser[]): SetGuestsAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload: guests,
  }),
  setEvents: (events: IEvent[]): SetEventsAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload: events,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: EventActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: EventActionEnum.SET_ERROR,
    payload,
  }),
  getGuests: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(EventActionCreators.setIsLoading(true));

      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(response.data));

      dispatch(EventActionCreators.setIsLoading(false));
    } catch (e) {
      dispatch(EventActionCreators.setError("Error"));
    }
  },
  createEvent:
    (event: IEvent, username: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(EventActionCreators.setIsLoading(true));

        const events = localStorage.getItem("events") || "[]";
        const json = JSON.parse(events) as IEvent[];
        json.push(event);
        dispatch(EventActionCreators.setEvents(json));
        localStorage.setItem("events", JSON.stringify(json));

        dispatch(EventActionCreators.setIsLoading(false));
      } catch (e) {
        dispatch(EventActionCreators.setError("Error"));
      }
    },
  getEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(EventActionCreators.setIsLoading(true));

      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];
      dispatch(EventActionCreators.setEvents(json));

      dispatch(EventActionCreators.setIsLoading(false));
    } catch (e) {
      dispatch(EventActionCreators.setError("Error"));
    }
  },
};
