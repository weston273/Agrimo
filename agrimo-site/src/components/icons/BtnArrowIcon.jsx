import React from "react";

const BtnArrowIcon = ({ 
  direction = "left",  // left, right, up, down
  size = 24,           // any number
  color = "black"      // any CSS color
}) => {
  // Rotation based on direction
  const rotations = {
    left: "rotate(180 12 12)",
    right: "rotate(0 12 12)",
    up: "rotate(-90 12 12)",
    down: "rotate(90 12 12)",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <g transform={rotations[direction]}>
        <polyline points="15 18 9 12 15 6" />
      </g>
    </svg>
  );
};

export default BtnArrowIcon;
