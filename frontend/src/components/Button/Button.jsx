import React from "react";

const Button = ({ text, icon, btnClass, iconClass, ...rest }) => {
  return (
    <button
      className={`w-fit flex items-center gap-2 rounded-lg transition-all duration-200 ${btnClass}`}
      {...rest}
    >
      <span>{text}</span>
      {icon && <span className={iconClass}>{icon}</span>}
    </button>
  );
};

export default Button;
