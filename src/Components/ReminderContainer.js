import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getReminders } from "../Reminders/ReminderAction";

function ReminderContainer({ getReminders, data }) {
  const { reminders, loading, error } = data;
  useEffect(() => {
    getReminders();
  }, []);

  return loading ? (
    <h2>Loading</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <h2>Reminder List</h2>
      {reminders.map((reminder) => (
        <p key={reminder.id}>{reminder.title}</p>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getReminders: () => dispatch(getReminders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReminderContainer);
