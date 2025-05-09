import React from "react";

const Button = ({ text, icon, btnClass, iconClass }) => {
  return (
    <button
      className={`w-fit flex items-center gap-2 rounded-lg transition-all duration-200 ${btnClass}`}
    >
      {text}
      {icon && <img className={`${iconClass}`} src={icon} /> && (
        <span>{icon}</span>
      )}
    </button>
  );
};

export default Button;
