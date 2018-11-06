import React from "react";

const Icon = ({ hw, icon }) => (
  <svg height={hw} width={hw} viewBox="0 0 1024 1024">
    <path d={icon} />
  </svg>
);

export default Icon;
