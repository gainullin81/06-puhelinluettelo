import PropTypes from "prop-types";

const Notification = ({ message, type }) => {
  if (message === null) {
    return null;
  }

  return (
    <div
      style={
        type === "success" ? notificationSuccessStyle : notificationErrorStyle
      }
    >
      <h2>{message}</h2>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
};

const notificationSuccessStyle = {
  color: "green",
  fontSize: "16px",
  border: "1px solid green",
  backgroundColor: "#d3d3d3",
  padding: "2px",
  marginBottom: "20px",
};

const notificationErrorStyle = {
  color: "red",
  fontSize: "16px",
  border: "1px solid red",
  backgroundColor: "#d3d3d3",
  padding: "2px",
  marginBottom: "20px",
};

export default Notification;
