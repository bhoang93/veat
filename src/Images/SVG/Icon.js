import React from "react";

const Icon = ({ hw, icon, fill }) => (
  <svg height={hw} width={hw} viewBox="0 0 1024 1024">
    <g fill={fill}>
      <path d={icon} />
    </g>
  </svg>
);

export default Icon;
