import React from 'react';

const EllipseBullet = ({ size = 8, color = '#f4a300' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <ellipse cx="4" cy="4" rx="4" ry="4" fill={color} />
    </svg>
  );
};

export default EllipseBullet;
