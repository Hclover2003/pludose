import React from "react";

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card">
        <div className="card-content">
          <div className="card-title">Notifications</div>
          <ul className="notifications">
            {notifications &&
              notifications.map((item) => {
                return (
                  <li key={item.id}>
                    {" "}
                    <span className="pink-text">{item.user}</span>
                    <span>{item.content}</span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Notifications;
