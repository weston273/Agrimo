import React from 'react';

const PhoneIcon = ({ size = 24, color = '#EDDD5E' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill='none' 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.11 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.11-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.38 1.6.73 2.34a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.74-1.74a2 2 0 0 1 2.11-.45c.74.35 1.53.61 2.34.73a2 2 0 0 1 1.72 2z"></path>
    </svg>
  );
};

export default PhoneIcon;
