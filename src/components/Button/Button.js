import React from "react";
import classes from "./Button.module.css";

export const Button = ({ content, ...props }) => {
  return (
    <button className={classes.btn_base} {...props}>
      {content}
    </button>
  );
};
