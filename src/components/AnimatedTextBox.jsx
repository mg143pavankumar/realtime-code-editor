import React from "react";
import "./AnimatedTextBox.css";

const AnimatedTextBox = ({ label, textType, onChange, value, onKeyUp }) => {
  return (
    <div className="inputText__container">
      <input
        type={textType}
        className="inputBox"
        placeholder=" "
        onChange={onChange}
        value={value}
        onKeyUp={onKeyUp}
      />
      <label className="inputText__label" htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default AnimatedTextBox;
