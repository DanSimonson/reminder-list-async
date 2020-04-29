import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getReminders } from "../Reminders/ReminderAction";

function ReminderContainer({ getReminders, data }) {
  useEffect(() => {
    getReminders();
  }, []);
  console.log("data: ", data);
  /*let completedList = props.data.reminders.map((todo) => (
    <p>{todo.reminders}</p>
  ));
  return { completedList };*/
  return <p>reminders</p>;
}

const mapStateToProps = (state) => {
  return {
    //data: state.reminders,
    data: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getReminders: () => dispatch(getReminders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReminderContainer);
