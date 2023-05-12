import React from "react";

import styles from "./Button.module.css";

const Button = ({ variant = "primary", children, classNames, ...props }) => {
  const buttonStylesClassName = function () {
    switch (variant) {
      case "primary": {
        return "bbb-primary";
      }
      case "secondary": {
        return "bbb-secondary";
      }

      default: {
        return "bbb-primary";
      }
    }
  };

  return (
    <button
      className={`btn ${styles[buttonStylesClassName()]} ${
        classNames ? classNames : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
