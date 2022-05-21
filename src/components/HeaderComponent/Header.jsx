import React from "react";
import "./header.css";
import pic from "../../images/Group.png";
import Icon from "../../images/icon.png";

export const Header = () => {
  return (
    <div className="main-header">
      <img src={pic} alt="pic" />
      <div className="icon-card">
        <img src={Icon} alt="icon" />
        <div className="main-icon-text">
          Day 1 <br /> <span class="other-icon-text">of 5</span>
        </div>
      </div>
    </div>
  );
};
