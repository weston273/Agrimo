import React from 'react';

const ArrowIcon = ({ width = 24, height = 24, color = 'currentColor', direction = 'right', className = '' }) => {
  // Rotation map
  const rotation = {
    right: '0',
    down: '90',
    left: '180',
    up: '270',
    'top-left': '-45',  // diagonal ↖
    'top-right': '45',  // diagonal ↗
    'bottom-left': '-135', // diagonal ↙
    'bottom-right': '135', // diagonal ↘
  }[direction] || '0';

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
};

export default ArrowIcon;
