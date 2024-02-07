import React from "react";
import "./avatar.scss";

export const Avatar = () => {
  return (
    <div className="avatar-container">
      <img
        src={require("../../img/avatar.png")}
        alt="Avatar"
        className="avatar-img"
      />
    </div>
  );
};
