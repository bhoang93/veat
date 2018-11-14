import React from "react";
import spinner from "../Images/SVG/spinner10.svg";

const Loading = () => {
  return (
    <img src={spinner} className="loading-spinner" alt="loading spinner" />
  );
};

export default Loading;
