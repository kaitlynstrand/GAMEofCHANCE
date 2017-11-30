import React from "react";

export const FormBtn = props =>
  <button {...props} type="submit" className="button">
    {props.children}
  </button>;
