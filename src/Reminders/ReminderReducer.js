import React from "react";
import {
  GET_REMINDER_REQUEST,
  GET_REMINDER_FAILURE,
  GET_REMINDER_SUCCESS,
} from "./ReminderTypes";

const initialState = {
  loading: false,
  reminders: [],
  error: "",
};

const ReminderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REMINDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_REMINDER_SUCCESS:
      return {
        loading: false,
        reminders: action.payload,
        error: "",
      };
    case GET_REMINDER_FAILURE:
      return {
        loading: false,
        reminders: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ReminderReducer;
