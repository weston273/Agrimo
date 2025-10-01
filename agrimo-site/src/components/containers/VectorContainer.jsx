import React from "react";

const VectorContainer = ({ width = 512, height = 273, fill = "#000", children }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 273"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 40C0 17.9086 17.9086 0 40 0H472C494.091 0 512 17.9086 512 40V233C512 255.091 494.091 273 472 273H40C17.9086 273 0 255.091 0 233V40Z"
        fill={fill}
      />
      {/* Slot for content */}
      <foreignObject x="0" y="0" width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: "100%", height: "100%" }}>
          {children}
        </div>
      </foreignObject>
      
    </svg>
  );
};

export default VectorContainer;
