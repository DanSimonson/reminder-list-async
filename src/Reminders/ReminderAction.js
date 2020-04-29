import axios from "axios";
import {
  GET_REMINDER_REQUEST,
  GET_REMINDER_FAILURE,
  GET_REMINDER_SUCCESS,
} from "./ReminderTypes";

export const getReminderRequest = () => {
  return {
    type: GET_REMINDER_REQUEST,
  };
};

const getReminderSuccess = (reminders) => {
  return {
    type: GET_REMINDER_SUCCESS,
    payload: reminders,
  };
};

const getReminderFailure = (error) => {
  return {
    type: GET_REMINDER_FAILURE,
    payload: error,
  };
};

export const getReminders = () => {
  return (dispatch) => {
    dispatch(getReminderRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        let reminders = response.data;
        reminders = reminders.splice(0, 10);
        dispatch(getReminderSuccess(reminders));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getReminderFailure(errorMsg));
      });
  };
};
